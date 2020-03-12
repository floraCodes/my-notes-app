import React, { useState } from "react";
import styled from "@emotion/styled";

const ModalContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;
  border: 1px pink solid;
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
    console.log(note);
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
    <ModalContainer onSubmit={handleSubmit}>
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
      <button type="submit">Submit Change</button>
      <button type="button" onClick={handleCloseModal}>
        Cancel
      </button>
    </ModalContainer>
  );
};

export default Modal;
