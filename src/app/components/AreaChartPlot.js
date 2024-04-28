import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import {useEffect, useState} from 'react';
import { useTheme } from "../hooks/useTheme";
import { getData } from '../Api/FetchData';

const AreaChartPlot = () => {
const { theme } = useTheme();
const [plotData, setPlotData] = useState([]);
const [loading, setLoading]  = useState(true);

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
  const day = String(date.getDate()).padStart(2, '0'); // Add leading zero for single-digit days

  return `${day}-${month}-${year}`;
}

    useEffect(() => {
      getData().then((res) => {
        //console.log(res);
    
        var transformedData = res.measuredAts.map((time, idx) => ({
          //'measuredAt': new Date(time * 1000).toString("dd-mm-yyyy"),
          'measuredAt': formatDate(time * 1000),
          'densities': res.densities[idx],
          'temperatures': res.temperatures[idx],
        }));

        setPlotData(transformedData)
        setLoading(false)
        

      });
    }, []);

    return (
        <>
        {loading ? (<center>Loading....</center>) : (          <ResponsiveContainer width="100%" height="100%" >
            <LineChart width={730} height={250} data={plotData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 } }  >  

<CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="measuredAt"  stroke= { ` ${theme == "dark" ?  '#B3B2B4' : '#858283'} `}   />
              <YAxis  stroke= { ` ${theme == "dark" ?  '#B3B2B4' : '#858283'} `}   />
              <Tooltip />
              <Line type="monotone" dataKey="densities" stroke=  { ` ${theme == "dark" ?  '#F27405' : '#F27405'} `}  strokeWidth="1"  name="Densities"/>
              <Line type="monotone" dataKey="temperatures" stroke=  { ` ${theme == "dark" ?  '#5A0F8C' : '#270140'} `} strokeWidth="1"  name="Tempratures"/>
            </LineChart>
          </ResponsiveContainer>
)}
        </>
      );
  } 
  export default AreaChartPlot;