import React from "react";
import { useGloabalValues } from "../context/context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink, MdModeEdit } from "react-icons/md";

const Card = () => {
  //
  const {
    gitUser: {
      avatar_url,
      bio,
      html_url,
      location,
      login,
      name,
      company,
      blog,
    },
  } = useGloabalValues();

  return (
    <Wrapper className="box shadow-sm bg-white py-3 px-4 rounded position-relative">
      <div>
        <div className="d-flex align-items-center flex-wrap">
          <img
            src={avatar_url}
            alt={name}
            style={{ width: "5rem", height: "5rem" }}
            className="rounded-circle me-3"
          />
          <div>
            <h5 className="fw-bold">{name}</h5>
            <small className="text-muted">@{login}</small>
          </div>
          <div className="ms-auto">
            <a
              href={html_url}
              className="btn btn-sm btn-outline-info rounded-pill px-4 text-uppercase fw-bold"
            >
              Profile
            </a>
          </div>
        </div>
        <hr />
        <p>
          <MdModeEdit className="me-2" />
          {bio || "There is NO BIO for this User..."}
        </p>
      </div>
      <div>
        <small>
          <MdLocationOn className="me-2" />
          {location || "N/A"}
        </small>
        <br />
        <small>
          <MdBusiness className="me-2" />
          {company || "N/A"}
        </small>
        <br />
        <small>
          <a href={blog || html_url} className="text-decoration-none text-dark">
            <MdLink className="me-2" />
            {blog || "N/A"}
          </a>
        </small>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top-left-radius: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 1.5rem 0;
  @media (min-width: 768px) {
    width: 50%;
    margin: 1.5rem 0.5rem 0 0;
  }

  ::before {
    content: "User";
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

export default Card;
