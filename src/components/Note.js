import React from "react";
// import styled from "@emotion/styled";

const Note = ({ note }) => {
  const { title, body, id } = note;
  return (
    <>
      <div id={id}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </>
  );
};

export default Note;
