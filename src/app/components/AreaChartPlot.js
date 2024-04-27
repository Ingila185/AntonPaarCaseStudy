import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

import { useTheme } from "../hooks/useTheme";

const AreaChartPlot = () => {
  const { theme } = useTheme();

    const data = [
      {
        "year": "2016",
        "Iphone": 4000,
        "Samsung": 2400
      },
      {
        "year": "2017",
        "Iphone": 3000,
        "Samsung": 1398
      },
      {
        "year": "2018",
        "Iphone": 2000,
        "Samsung": 9800
      },
      {
        "year": "2019",
        "Iphone": 2780,
        "Samsung": 3908
      },
      {
        "year": "2020",
        "Iphone": 1890,
        "Samsung": 4800
      },
      {
        "year": "2021",
        "Iphone": 2390,
        "Samsung": 3800
      },
      {
        "year": "2022",
        "Iphone": 3490,
        "Samsung": 4300
      }
    ]
    return (
        <>
          <ResponsiveContainer width="100%" height="100%" >
            <LineChart width={730} height={250} data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>

<CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" stroke= { ` ${theme == "dark" ?  '#B3B2B4' : '#858283'} `}   />
              <YAxis  stroke= { ` ${theme == "dark" ?  '#B3B2B4' : '#858283'} `}   />
              <Tooltip />
              <Line type="monotone" dataKey="Iphone" stroke="#F27405" strokeWidth="3"  activeDot={{ r: 2 }}/>
              <Line type="monotone" dataKey="Samsung" stroke="#5A0F8C"  strokeWidth="3"/>
            </LineChart>
          </ResponsiveContainer>
        </>
      );
  } 
  export default AreaChartPlot;