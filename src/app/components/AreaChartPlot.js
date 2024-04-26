import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
const AreaChartPlot = () => {
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
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Iphone" stroke="#8884d8"  activeDot={{ r: 8 }}/>
              <Line type="monotone" dataKey="Samsung" stroke="#82ca9d"  />
            </LineChart>
          </ResponsiveContainer>
        </>
      );
  } 
  export default AreaChartPlot;