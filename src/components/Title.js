import React from "react";
import styled from "@emotion/styled";
import Icon from "./NotesIcon.png";

const TitleElement = styled.h1`
  font-size: 4rem;
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
