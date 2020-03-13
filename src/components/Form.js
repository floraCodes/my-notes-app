import React, { useState } from "react";
import styled from "@emotion/styled";
import uuid from "uuid/v4";

import Error from "./Error";

const FormContainer = styled.div`
  border: 1px solid red;
  margin: 1rem;
`;

const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 1rem;
  width: 400px;
  border: 2px solid green;

  & input {
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem;
    border: none;
    font-size: 1.2rem;
  }
  & textarea.note-body {
    box-sizing: border-box;
    min-height: 100px;
    width: 100%;
    padding: 0.5rem;
    border: none;
    font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
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

    if (!title || !body) {
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
        <div>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </FormElement>
    </FormContainer>
  );
};

export default Form;
