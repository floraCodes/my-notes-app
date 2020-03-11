import React from "react";
import Note from "./Note";
import styled from "@emotion/styled";

const ListContainer = styled.div`
  border: 1px solid black;
`;

const List = () => {
  return (
    <ListContainer>
      <h3>This will be the container of notes:</h3>
      <Note />
    </ListContainer>
  );
};

export default List;
