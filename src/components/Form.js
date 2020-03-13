import React, { useState } from "react";
import styled from "@emotion/styled";
import uuid from "uuid/v4";

import Error from "./Error";

const FormContainer = styled.div`
  justify-self: center;
  margin: 0 auto;
  width: 40vw;
  max-width: 400px;
  border: 5px solid red;
  margin: 1rem;
`;

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 1rem;
  max-width: 400px;
  border: 1px solid gray;
  border-radius: 15px;

  & input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    font-size: 1.2rem;
    background-color: transparent;
  }
  & textarea.note-body {
    min-height: 50px;
    width: 100%;
    padding: 0.5rem;
    border: none;
    resize: none;
    font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  & .buttonContainer {
    text-align: right;
  }

  & button {
    margin-top: 1rem;
    padding: 0.2rem 0.5rem;
  }
`;

const Form = ({ addNewNote }) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
    id: ""
  });
  const { title, body } = note;

  const [error, setError] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;

    setNote({
      ...note,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!title && !body) {
      setError(true);
      return;
    }
    setError(false);
    note.id = uuid();
    addNewNote(note);

    setNote({
      title: "",
      body: "",
      id: ""
    });
  };

  const handleCancel = () => {
    setNote({
      title: "",
      body: "",
      id: ""
    });
  };

  return (
    <FormContainer>
      {error ? <Error message="You must complete all fields" /> : null}
      <FormElement onSubmit={handleSubmit}>
        <label htmlFor="note-title">
          <input
            type="text"
            id="note-title"
            className="note-title"
            placeholder="Title..."
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="note-body">
          <textarea
            type="text"
            id="note-body"
            className="note-body"
            placeholder="Create a note..."
            name="body"
            value={body}
            onChange={handleChange}
          />
        </label>
        <div className="buttonContainer">
          <button type="button" onClick={handleCancel}>
            X
          </button>
          <button type="submit">Create!</button>
        </div>
      </FormElement>
    </FormContainer>
  );
};

export default Form;
