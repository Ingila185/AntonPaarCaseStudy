'use client'
import AreaChartPlot from "./AreaChartPlot";
import NewReading from './NewReading';

import { useTheme } from "../hooks/useTheme";

const Charts = () => {

  const { theme } = useTheme();


  return (
    <>
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

      <section className="flex my-4 px-4 gap-3 rounded">
        <div className={`w-full h-[300px] rounded-2xl ${theme === 'dark' ? 'bg-coal' : 'bg-flour'}`}>
        <AreaChartPlot/>
        </div>

        {/*<div className="w-1/2 h-[300px] bg-gray-700 rounded">ddd</div> */}
      </section>

      <section className=" flex my-4 px-4 gap-2 md:flex-cols">
        <div className={`w-1/3 h-100 ${theme === 'dark' ? 'bg-coal' : 'bg-pavlovaLight'} rounded py-4  px-3`}>
        <h1 className={`pb-4 font-bold ${theme === 'dark' ? 'text-pearl' : 'text-indigoDark'}`}>New Reading</h1>
      <NewReading />
        </div>
        <div className={`w-2/3 h-100 rounded ${theme === 'dark' ? 'bg-coal' : 'bg-pavlovaLight'} `}>


          
        </div>
     {/* <div className={`w-1/3 h-[250px] rounded ${theme === 'dark' ? 'bg-coal' : 'bg-pavlovaLight'} `}>sff</div>
        */ }  
        
              </section>
    </>
  );
};

export default Charts;