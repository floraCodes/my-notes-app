import React, { useState } from "react";
import styled from "@emotion/styled";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(229, 229, 229, 0.5);
`;

const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;
  border: 1px pink solid;
  background-color: #fff;
`;

const ModalInput = styled.input`
  width: 300px;
  padding: 0.5rem;
`;

const Modal = ({ currentNote, updateNote, setEditing }) => {
  const [note, setNote] = useState(currentNote);
  const { title, body, id } = note;

  const handleChange = e => {
    const { name, value } = e.target;

    setNote({
      ...note,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateNote(id, note);
  };

  const handleCloseModal = e => {
    setEditing(false);
  };

  return (
    <ModalContainer>
      <ModalContent onSubmit={handleSubmit}>
        <button type="button" onClick={handleCloseModal}>
          X
        </button>
        <label htmlFor="title">
          <ModalInput
            type="text"
            id="title"
            placeholder="Title..."
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="body">
          <ModalInput
            type="text"
            id="body"
            placeholder="Create a note..."
            name="body"
            value={body}
            onChange={handleChange}
          />
        </label>
        <div>
          <button type="submit">Submit Change</button>
        </div>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
