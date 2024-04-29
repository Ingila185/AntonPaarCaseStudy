'use server'
   
export async function getData() {
     const url = 'https://fermentationdatasample.azurewebsites.net/api/query';
    const options = {
      method: 'GET',
      headers: {
        'X-User': 'INGILA'
      }}
        
    const res = await fetch(url, options);
 
    if (res.status != 200) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json();
  }