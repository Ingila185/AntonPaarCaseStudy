describe('First Page loads and data is fetched and plotted into graph', () => {
  it('Loads the server side page and fetches data', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(20000) //wait 20 seconds for the Recharts library to plot values
    cy.get('.recharts-surface').should('be.visible'); //Recharts should appear 
    cy.screenshot();

  })
}),

describe('User is able to POST new readings', () => {
  it('User successfully posts new reading', () => {
    cy.visit('http://localhost:3000/');
    cy.wait(20000) //wait 20 seconds for the Recharts library to plot values
    cy.get('#measuredAt').type(new Date().toISOString().slice(0, 10));
    cy.get('#density').type("12.54");
    cy.get('#temperature').type("20.25");
    cy.get("#submit").click();
    cy.wait(5000) // Wait 5 sec for Post to send data
    cy.get('body').contains("Success")
  })
})