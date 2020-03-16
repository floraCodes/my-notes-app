import React from "react";
import styled from "@emotion/styled";
import Icon from "../assets/NotesIcon.png";

const TitleElement = styled.h1`
  font-size: 4rem;
  @media (max-width: 600px) {
    font-size: 3rem;
    margin-top: 0.5rem;

    & img {
      width: 3rem;
      height: 100%;
    }
  }
`;

const Title = ({ title }) => {
  return (
    <TitleElement>
      {title}
      <img alt="" src={Icon}></img>
    </TitleElement>
  );
};

export default Title;
