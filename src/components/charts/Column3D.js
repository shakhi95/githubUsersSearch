import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Label,
  LabelList,
  Tooltip,
  Cell,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#bb8a20", "#FF8042", "#7e0f74"];

const Column = ({ data }) => {
  //
  if (data.length === 0) {
    return (
      <Wrapper className="box shadow-sm bg-white py-3 rounded position-relative">
        <div className="text-center mt-5 text-danger">NO Data To Display</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="box shadow-sm bg-white py-3 pe-2 rounded position-relative">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{ top: 15, right: 30, left: 0, bottom: 5 }}
        >
          <Tooltip />
          <XAxis dataKey="name" tick={false}>
            <Label value="Repos" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label="Stars" tick={false} />
          <Bar dataKey="stars" fill="#8884d8" barSize={30}>
            <LabelList dataKey="stars" position="top" />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top-left-radius: 0 !important;
  width: 100%;
  margin: 1.5rem 0;
  @media (min-width: 768px) {
    width: 60%;
    margin: 3.5rem 0 0 0.5rem;
  }

  ::before {
    content: "Most Stared Repos";
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

export default Column;
