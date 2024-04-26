'use client'
import AreaChartPlot from "./AreaChartPlot";

const Charts = () => {
  return (
    <>
      <section>
        <div className="flex m-4 gap-2">
          <div className="flex-1 px-2 justify-center w-16 bg-pavlovaLight shadow rounded h-300px">
            <div className="">
              <p className="text-slate font-bold ">Latest Readings</p>
              <p className="py-4 font-bold text-indigoDark" >1.047</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16 bg-pavlovaLight shadow rounded max-h-300px">
            <div className="">
              <p className="text-slate font-bold">ABV</p>
              <p className="py-4 font-bold text-indigoDark">4.8% </p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center w-16  bg-pavlovaLight shadow rounded max-h-300px">
            <div className="">
              <p className="text-slate font-bold">Attenuation</p>
              <p className="py-4 font-bold text-indigoDark">81% </p>
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

      <section className="flex my-4 px-4 gap-2">
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded">565</div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded">sdsdsds</div>
        <div className=" w-1/3 h-[250px] bg-gray-700 rounded">sff</div>
      </section>
    </>
  );
};

export default Charts;