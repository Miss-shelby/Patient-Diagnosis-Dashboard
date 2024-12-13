/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Area,ResponsiveContainer} from "recharts"
 
  const DiagnosisHistoryChart = ({chartData}) => {

    return (
    <>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 10,
          }}>
          <CartesianGrid  horizontal={true} vertical={false} />
         
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={{ fontSize: 10, fontWeight: 600, fontFamily:'manrope' }}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis
            ticks={[60, 80, 100, 120, 140, 160, 180]}
            tick={{ fontSize: 10, fontWeight: 600,fontFamily:"manrope" }}
            domain={[60, 180]}
            axisLine={true}
            tickLine={true}
          />
          <Area type="monotone" dataKey="pv" fill="red" />
          <Line
            type="monotone"
            dataKey="systolic"
            stroke="#E66FD2"
            dot={{
                 r: 4,
                 fill:"#E66FD2",
                 strokeWidth:2,
            }}
            activeDot={{ r: 4,
                fill:"#E66FD2",
                stroke:"blue",
                strokeWidth:3,
             }}
            strokeWidth={2}
            connectNulls={true}
          />
           <Line
          type="monotone"
          dataKey="diastolic"
          stroke="#8C6FE6"
          dot={{
            r: 4,
            fill: "#8C6FE6",
            strokeWidth: 2,
          }}
          activeDot={{
            r: 8,
            fill: "#8C6FE6",
            stroke: "#fff",
            strokeWidth: 3,
          }}
          strokeWidth={2}
          connectNulls={true}
        />
        </LineChart>
      </ResponsiveContainer>
    </>
    )
  }
  
  export default DiagnosisHistoryChart