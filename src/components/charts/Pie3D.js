import React from "react";
import styled from "styled-components";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#bb8a20", "#FF8042", "#7e0f74"];
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
  //
  return (
    <div className="d-flex justify-content-center align-items-center flex-wrap">
      {payload.map(({ payload: { fill, label } }) => {
        return (
          <small
            key={fill}
            style={{ color: "white", backgroundColor: fill }}
            className="m-1 px-1"
          >
            {label}
          </small>
        );
      })}
    </div>
  );
};

const Pie3D = ({ data }) => {
  //
  if (data.length === 0) {
    return (
      <Wrapper className="box shadow-sm bg-white py-3 rounded position-relative">
        <div className="text-center mt-5 text-danger">NO Data To Display</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="box shadow-sm bg-white py-3 px-4 rounded position-relative">
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top-left-radius: 0 !important;
  width: 100%;
  margin: 1.5rem 0;
  @media (min-width: 768px) {
    width: 40%;
    margin: 3.5rem 0.5rem 0 0;
  }

  ::before {
    content: "Most Used Languages";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    background-color: white;
    padding: 0 1rem;
    border-top-right-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
    color: #6c757d;
    font-weight: 500;
  }
`;

export default Pie3D;
