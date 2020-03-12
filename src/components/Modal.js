import React, { useState } from "react";
import styled from "@emotion/styled";
import uuid from "uuid/v4";

const ModalContainer = styled.div`
  border: 1px solid red;
  margin: 1rem;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  & input {
    width: 300px;
    padding: 0.5rem;
    /* margin: 0.5rem; */
  }

  & button {
    margin-top: 1rem;
    padding: 0.2rem 0.5rem;
  }
`;

const Modal = ({ addNewNote }) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
    id: ""
  });

  const { title, body } = note;

  const handleChange = e => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    note.id = uuid();
    addNewNote(note);
  };

  return (
    <ModalContainer>
      <ModalForm onSubmit={handleSubmit}>
        <label htmlFor="modal-title">
          <input
            type="text"
            id="modal-title"
            placeholder="Title..."
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="modal-body">
          <input
            type="text"
            id="modal-body"
            placeholder="Create a note..."
            name="body"
            value={body}
            onChange={handleChange}
          />
        </label>
        <div>
          <button>Delete</button>
          <button type="submit">Close</button>
        </div>
      </ModalForm>
    </ModalContainer>
  );
};

export default Modal;
