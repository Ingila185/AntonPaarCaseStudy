'use client'

import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

import RequestResponse from './RequestResponse';

const NewReading = () => {
  const { theme } = useTheme();

  const [formData, setFormData] = useState(
    {
      measuredAt: 0,
      temperature: 0,
      density: 0,
    });

    const [success, setSuccess] = useState(false);


  const url = 'https://fermentationdatasample.azurewebsites.net/api/write';

  const options = {
    method: 'POST', // The curl command uses POST for sending data
    headers: {
      'accept': 'application/json',
      'X-User': 'INGILA', //Unique UUID
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData), // Convert data object to JSON string
  };

  // console.log(formData)
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: Number(event.currentTarget.value), // Ensure numeric values
    });


  };

  const handleClose = (event : MouseEvent) =>
  {
    event.preventDefault();
    event.stopPropagation();
    setSuccess(false);
  }

  const handleDateChange = (event: React.FormEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: new Date(event.currentTarget.value).getTime() / 1000, // Parsing values from Calender to seconds. Ensure numeric values
    });

    //console.log(formData);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(url, options)
      .then((response: any) => {

        console.log('Success:', response); // Handle successful response
        setSuccess(true);

      })
      .catch(error => {
        console.error('Error:', error); // Handle errors
      });

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-2 mb-5">
        <label htmlFor="measuredAt" className={`block mb-2 text-sm font-bold ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>Date</label>
        <input type="date" id="measuredAt" name="measuredAt" value={new Date(formData.measuredAt * 1000).toISOString().substring(0, 10)}
          onChange={handleDateChange} className={`w-full  ${theme === 'dark' ? 'bg-pearl' : 'bg-flour'}  border border-slate text-slate
     text-sm rounded-lg   block w-full p-2.5 focus:outline-none	`}
          placeholder="dd-mmm-yyyy" required />
      </div>
      <div className="px-2 mb-5">
        <label htmlFor="density" className={`block mb-2 text-sm text-indigoDark font-bold ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>Density</label>
        <input type="number" name="density" value={formData.density}
          onChange={handleChange} id="density" className={`w-full  ${theme === 'dark' ? 'bg-pearl' : 'bg-flour'}  border border-slate text-slate
          text-sm rounded-lg   block w-full p-2.5 focus:outline-none	`} required />
      </div>
      <div className="px-2 mb-5">
        <label htmlFor="temperature" className={`block mb-2 text-sm text-indigoDark font-bold ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>Temperature</label>
        <input type="number" name="temperature" value={formData.temperature}
          onChange={handleChange} id="temperature" className={`w-full  ${theme === 'dark' ? 'bg-pearl' : 'bg-flour'}  border border-slate text-slate
          text-sm rounded-lg   block w-full p-2.5 focus:outline-none	`} required />
      </div>

      <div className="mb-5">

      <button type="submit" id = "submit" className="text-indigoDark bg-nectarine  
      font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
      </div>
      <div className="mb-5">   
      {success && <RequestResponse response="Success"   onClose={handleClose} /> }
      </div>
    </form>

  )
}

export default NewReading;
