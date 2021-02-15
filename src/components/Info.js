import React from "react";
import { useGloabalValues } from "../context/context";
import styled from "styled-components";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const Info = () => {
  //
  const {
    gitUser: { followers, following, public_gists, public_repos },
  } = useGloabalValues();

  return (
    <Wrapper className="container mb-3">
      <div className="row">
        <div className="col-sm-6 col-lg-3 my-2">
          <div className="bg-white rounded shadow-sm w-100 d-flex align-items-center py-3 px-4">
            <div className="p-2 pink rounded-circle me-3">
              <GoRepo className="icon" />
            </div>
            <div>
              <h6 className="fw-bold m-0">{public_repos}</h6>
              <h6 className="text-muted m-0">Repos</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 my-2">
          <div className="bg-white rounded shadow-sm w-100 d-flex align-items-center py-3 px-4">
            <div className="p-2 green rounded-circle me-3">
              <FiUsers className="icon" />
            </div>
            <div>
              <h6 className="fw-bold m-0">{followers}</h6>
              <h6 className="text-muted m-0">Followers</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3  my-2">
          <div className="bg-white rounded shadow-sm w-100 d-flex align-items-center py-3 px-4">
            <div className="p-2 purple rounded-circle me-3">
              <FiUserPlus className="icon" />
            </div>
            <div>
              <h6 className="fw-bold m-0">{following}</h6>
              <h6 className="text-muted m-0">Following</h6>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 my-2">
          <div className="bg-white rounded shadow-sm w-100 d-flex align-items-center py-3 px-4">
            <div className="p-2 yellow rounded-circle me-3">
              <GoGist className="icon" />
            </div>
            <div>
              <h6 className="fw-bold m-0">{public_gists}</h6>
              <h6 className="text-muted m-0">Gists</h6>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .icon {
    font-size: 1.5rem;
  }

  .pink {
    background: #ffe0f0;
    color: #da4a91;
  }
  .green {
    background: #e0fcff;
    color: #2caeba;
  }
  .purple {
    background: #e6e6ff;
    color: #5d55fa;
  }
  .yellow {
    background: #fffbea;
    color: #f0b429;
  }
`;

export default Info;
