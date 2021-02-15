import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import loginImg from "../images/login-img.svg";

const Login = () => {
  //
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper className="min-vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center w-50">
        <img src={loginImg} alt="login" className="img-fluid" />
        <button className="btn btn-info mt-3 py-0" onClick={loginWithRedirect}>
          LOG IN / SIGN UP
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #e0fcff;
  button {
    background-color: #88ebf2;
  }
`;

export default Login;
