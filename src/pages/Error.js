import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
  //
  return (
    <Wrapper className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>404</h1>
        <h2>Sorry, The Page You Tried Cannot Be Found</h2>
        <Link to="/" className="btn btn-info mt-3 py-0">
          BACK HOME
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #e0fcff;

  h1 {
    font-size: 10rem;
  }

  a {
    background-color: #88ebf2;
  }
`;

export default Error;
