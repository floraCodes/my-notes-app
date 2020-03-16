import React from "react";
import styled from "@emotion/styled";
import "./note.css";

const NoteElement = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin: 1rem;
  padding: 1rem;
  width: 15rem;
  min-height: 7rem;
  transition: all 0.2s ease-in-out;

  & :hover {
    .buttons {
      opacity: 1;
    }
  }

  & .body {
    padding: 0.7rem 0 1rem 0;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  -moz-transition-duration: 0.218s;
  transition-duration: 0.218s;
  -moz-transition-property: opacity;
  transition-property: opacity;
  -moz-transition-timing-function: ease-in;
  transition-timing-function: ease-in;

  & .note-button {
    width: 30px;
    height: 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const Note = ({ note, deleteNote, editNote }) => {
  const { title, body, id } = note;

  const handleDelete = () => {
    deleteNote(id);
  };

  const handleEdit = () => {
    editNote(note);
  };

  return (
    <NoteElement id={id} className="note">
      <div>
        <h3 className="title">{title}</h3>
        <p className="body">{body}</p>
        <ButtonsContainer className="buttons" role="toolbox">
          <div
            className="edit-button note-button"
            role="button"
            onClick={handleEdit}
          ></div>
          <div
            className="delete-button note-button"
            role="button"
            onClick={handleDelete}
          ></div>
        </ButtonsContainer>
      </div>
    </NoteElement>
  );
};

export default Note;
