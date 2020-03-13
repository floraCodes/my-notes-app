import React from "react";
import styled from "@emotion/styled";

const TitleElement = styled.h1`
  font-size: 4rem;
  margin: 1rem;
`;

const Title = ({ title }) => {
  return <TitleElement>{title}</TitleElement>;
};

export default Title;
