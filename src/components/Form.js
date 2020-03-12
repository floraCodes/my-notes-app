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

const Form = ({ addNewNote }) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
    id: ""
  });
  const { title, body } = note;

  const [error, setError] = useState(false);

  const handleChange = e => {
    setNote({
      ...note,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) {
      setError(true);
      return;
    }
    setError(false);
    note.id = uuid();
    addNewNote(note);
  };

  return (
    <FormContainer>
      {error ? <Error message="You must complete all fields" /> : null}
      <FormElement onSubmit={handleSubmit}>
        <label htmlFor="note-title">
          <input
            type="text"
            id="note-title"
            placeholder="Title..."
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="note-body">
          <input
            type="text"
            id="note-body"
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
      </FormElement>
    </FormContainer>
  );
};

export default Form;
