import React from "react";
import styled from "@emotion/styled";

const ModalContainer = styled.form``;

const NoteBodyInput = styled.input`
  width: 300px;
  padding: 0.5rem;
`;

const Modal = ({ notes }) => {
  return (
    <ModalContainer>
      <label htmlFor="note-body">
        <NoteBodyInput
          type="text"
          id="note-body"
          placeholder="Create a note..."
        />
      </label>
    </ModalContainer>
  );
};

export default Modal;
