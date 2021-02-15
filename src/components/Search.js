import React from "react";
import styled from "styled-components";
import { FcSearch } from "react-icons/fc";
import { useGloabalValues } from "../context/context";

const Search = () => {
  //
  const {
    searchTerm,
    setSearchTerm,
    error,
    reqRate,
    searchGitUser,
  } = useGloabalValues();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchGitUser();
  };

  return (
    <Wrapper className="container mb-5">
      <div className="row">
        <div className="col-10 col-md-8 mx-auto bg-white rounded-pill pe-0">
          <form className="d-flex align-items-center" onSubmit={handleSubmit}>
            <FcSearch className="" />
            <input
              type="text"
              className="form-control border-0 w-auto flex-fill"
              placeholder="Git UserName..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled={reqRate.limit - reqRate.used === 0 && true}
            />
            <button
              className="btn btn-info rounded-pill border-0"
              disabled={reqRate.limit - reqRate.used === 0 && true}
            >
              Search User
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-10 col-md-8 mx-auto">
          <div className="d-flex justify-content-between px-1">
            <small
              className="text-danger"
              style={{ visibility: error.visibility }}
            >
              {error.mssg}
            </small>
            <small className="text-muted">
              Used Requests: {reqRate.used} (Limit: {reqRate.limit}/hr)
            </small>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  input:focus {
    border: none !important;
    box-shadow: none !important;
  }
  button:active {
    border: none !important;
    box-shadow: none !important;
  }
  button:focus {
    border: none !important;
    box-shadow: none !important;
  }
`;

export default Search;
