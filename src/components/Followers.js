import React from "react";
import { useGloabalValues } from "../context/context";
import styled from "styled-components";

const Followers = () => {
  //
  const { followers } = useGloabalValues();

  const renderList = () => {
    return followers.map(({ avatar_url, html_url, id, login }) => {
      return (
        <div
          key={id}
          className="d-flex align-items-center flex-wrap my-1 px-4 py-1"
        >
          <img
            src={avatar_url}
            alt={login}
            style={{ width: "3rem", height: "3rem" }}
            className="rounded-circle me-3"
          />
          <div>
            <small className="text-uppercase">{login}</small>
          </div>
          <a
            href={html_url}
            className="ms-auto btn btn-sm btn-outline-info py-0"
          >
            View Profile
          </a>
        </div>
      );
    });
  };
  return (
    <Wrapper className="box shadow-sm bg-white py-3 px-1 rounded position-relative">
      <div style={{ overflowY: "scroll", height: "230px" }}>{renderList()}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top-left-radius: 0 !important;

  margin: 1.5rem 0;
  @media (min-width: 768px) {
    width: 50%;
    margin: 1.5rem 0 0 0.5rem;
  }

  ::before {
    content: "Followers";
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

export default Followers;
