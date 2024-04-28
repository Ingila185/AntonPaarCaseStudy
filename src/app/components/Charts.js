'use client'
import AreaChartPlot from "./AreaChartPlot";
import NewReading from './NewReading';
import ReadingList from './ReadingList';
import Notes from './Notes';

import { useTheme } from "../hooks/useTheme";

const Charts = () => {

  const { theme } = useTheme();


  return (
    <>

    <section className="align-center items-center ">
    <div className="flex flex-col m-4 gap-2 align-center items-center justify-center ">
    <h1 className={`text-4xl underline font-bold  ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`} >Bell's IPA Oct.22</h1>
    <img className="w-8 h-8 rounded-full" src="male.png" alt="Neil image" />
    <p className={`font-bold ${theme === 'dark' ? 'text-pearlGray' : 'text-slate'}`}>Latest Reading 1 hr ago</p>
</div>

    </section>
      <section>
        <div className="flex m-4 gap-2 ">
          <div className={`flex-1 px-2 justify-center w-1/3 ${theme === 'dark' ? 'bg-coal' : 'bg-pavlovaLight'} shadow rounded max-h-300px`}>
            <div className="p-2 ">
              <h1 className={`font-bold ${theme === 'dark' ? 'text-pearlGray' : 'text-slate'}`}>Latest Reading</h1>
              <p className={`  text-5xl  ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`} >1.047</p>
           
            </div>
          </div>
          <div className={`flex-1 px-2 justify-center w-1/3 ${theme === 'dark' ? 'bg-coal' : 'bg-pavlovaLight'} shadow rounded max-h-300px`}>
            <div className="p-2">
              <p className={`font-bold ${theme === 'dark' ? 'text-pearlGray' : 'text-slate'}`}>ABV</p>
              <p className={`  text-5xl  ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>4.8% </p>
            </div>
          </div>
          <div className={`flex-1 px-2 justify-center w-1/3 ${theme === 'dark' ? 'bg-coal' : 'bg-pavlovaLight'} shadow rounded max-h-300px`}>
            <div className="p-2">
              <p className={`font-bold ${theme === 'dark' ? 'text-pearlGray' : 'text-slate'}`}>Attenuation</p>
              <p className={`  text-5xl  ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>81% </p>
            </div>
          </div>
          
        </div>
      </section>

      <section className="flex flex-col my-4 px-4 gap-3 rounded">
      <h1 className={`  text-2xl underline font-bold  ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`} >Fermenting</h1>
        <div className={`w-full h-[300px] rounded-2xl ${theme === 'dark' ? 'bg-coal' : 'bg-flour'}`}>
        <AreaChartPlot/>
        </div>

        {/*<div className="w-1/2 h-[300px] bg-gray-700 rounded">ddd</div> */}
      </section>


      <section className=" my-4 px-4 ">
      <div className="flex flex-col gap-5">
      <div>
      <h1 className={`pb-4 text-2xl font-bold underline ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>Readings</h1>
      <ReadingList />

      </div>
      <div>
      <h1 className={`font-bold text-2xl underline ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>Add Reading</h1>
        <NewReading />

      </div>
      <div>
      <h1 className={`pb-4 font-bold text-2xl underline ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>Notes</h1>

      <div className={`w-full h-100 rounded-2xl ${theme === 'dark' ? 'bg-coal' : 'bg-flour'}`}>
        <Notes />
        </div>
      </div>
      </div>
      </section>



    {/* <section className=" flex  my-4 px-4 gap-2 ">
        <div className="flex m-4 gap-2 md:flex-cols">
        <div className={`w-1/3 md:w-full h-100 ${theme === 'dark' ? 'bg-coal' : 'bg-pavlovaLight'} rounded py-4  px-3`}>
        <h1 className={`pb-4 font-bold ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>New Reading</h1>
      <NewReading />
        </div>
     
      <div className={`w-1/3 p-4  md:w-full h-100 rounded ${theme === 'dark' ? 'bg-coal' : 'bg-pavlovaLight'} `}>
      <h1 className={`pb-4 font-bold ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>Reading List</h1>
        <ReadingList />
      </div>


      <div className={`w-1/3 p-4 md:w-full h-100 rounded ${theme === 'dark' ? 'bg-coal' : 'bg-pavlovaLight'} `}>
      <h1 className={`pb-4 font-bold ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>Reading List</h1>
        <ReadingList />
      </div>



      </div>
  </section>*/ }


      
    </>
  );
};

export default Charts;