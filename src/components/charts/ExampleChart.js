import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#7e0f74"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  //
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      style={{ fontSize: "10px" }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const renderCustomizedLegend = ({ payload }) => {
  console.log(payload);
  //
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {payload.map(({ payload: { fill, label } }) => {
        return (
          <small key={fill} style={{ color: fill }} className="mx-1">
            - {label}
          </small>
        );
      })}
    </div>
  );
};

const ExampleChart = ({ data }) => {
  //

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Legend content={renderCustomizedLegend} />
        <Pie
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExampleChart;

// const data = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
// ];

// export default class Example extends PureComponent {
//   static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";

//   render() {
//     return (
//       <PieChart width={400} height={400}>
//         <Pie
//           data={data}
//           cx={200}
//           cy={200}
//           labelLine={false}
//           label={renderCustomizedLabel}
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     );
//   }
// }
