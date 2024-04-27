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
          <div className="flex-1 px-2 justify-center w-1/3 bg-pavlovaLight shadow rounded h-300px">
            <div className="p-2 ">
              <h1 className="text-slate font-bold ">Latest Reading</h1>
              <p className="font-bold text-indigoDark text-5xl " >1.047</p>
           
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-1/3 bg-pavlovaLight shadow rounded max-h-300px">
            <div className="p-2">
              <p className="text-slate font-bold">ABV</p>
              <p className="font-bold text-indigoDark text-5xl">4.8% </p>
            </div>
          </div>
          <div className={`flex-1 px-2 justify-center w-1/3 ${theme === 'light' ? 'bg-pavlovaLight' : 'bg-pebble'} shadow rounded max-h-300px`}>
            <div className="p-2">
              <p className="text-slate font-bold">Attenuation</p>
              <p className="font-bold text-indigoDark text-5xl">81% </p>
            </div>
          </div>
          
        </div>
      </section>

      <section className="flex my-4 px-4 gap-3 rounded">
        <div className="w-full h-[300px] bg-pavlovaLight rounded-2xl">
        <AreaChartPlot/>
        </div>

        {/*<div className="w-1/2 h-[300px] bg-gray-700 rounded">ddd</div> */}
      </section>

      <section className=" flex my-4 px-4 gap-2">
        <div className=" w-full h-100 bg-pavlovaLight rounded py-4 my-6 px-3">
    <h1 className=" pb-4 text-indigoDark font-bold">New Reading</h1>
      <NewReading />
        </div>
    {/*    <div className=" w-1/3 h-[250px] bg-pavlovaLight rounded">sdsdsds</div>
        <div className=" w-1/3 h-[250px] bg-pavlovaLight rounded">sff</div>*/}
      </section>
    </>
  );
};

export default Charts;