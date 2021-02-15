import React, { useState } from "react";
import styled from "styled-components";
import { useUserValues } from "../context/user_context";
import { useHistory } from "react-router-dom";
import loginImg from "../images/login-img.svg";

const Login = () => {
  //
  const { signIn } = useUserValues();
  const [name, setName] = useState("");
  const history = useHistory();

  const onFormSub = (e) => {
    e.preventDefault();
    if (name.length !== 0) {
      signIn(name);
      history.push("/");
    }
  };

  return (
    <Wrapper className="min-vh-100 py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto p-5 text-center">
            <img src={loginImg} alt="login" className="img-fluid mb-5" />
            <form onSubmit={onFormSub}>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name..."
                required
              />
              <button type="submit" className="btn btn-info mt-3 py-0">
                LOG IN / SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #e0fcff;
`;

export default Login;
