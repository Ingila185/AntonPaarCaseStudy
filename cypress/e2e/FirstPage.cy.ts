describe('First Page loads and data is fetched and plotted into graph', () => {
  it('Loads the server side page and fetches data', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(10000) //wait 10 seconds for the Recharts library to plot values
    cy.get('.recharts-surface').should('be.visible'); //Recharts should appear 
    cy.screenshot();


  }),

  it('Allows user to Post data to write API', ()=>
  {
    cy.visit('http://localhost:3000/');
    cy.wait(10000)
    cy.get('#measuredAt').type(new Date().toISOString().slice(0, 10));
    cy.get('#density').type((Math.floor(Math.random() * 50) + 1).toString()); //Generate random number from 1 to 50
    cy.get('#temperature').type((Math.floor(Math.random() * 50) + 1).toString());//Generate random number from 1 to 50
    cy.get("#submit").click();
    cy.wait(5000) // Wait 5 sec for Post to send data
    cy.get('body').contains("Success")
  }),

  it('Switches to dark theme', ()=>
  {
    cy.visit('http://localhost:3000/');
    cy.wait(10000)
    cy.get("#toggleTheme").click();
    cy.get('.bg-charcoal').should('be.visible');
    cy.screenshot();
  })

})

/*describe('User is able to POST new readings', () => {
  it('User successfully posts new reading', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(10000) //wait 10 seconds for the Recharts library to plot values
 
  })
})*/