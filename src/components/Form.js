import React, { useState } from "react";
import styled from "@emotion/styled";
import uuid from "uuid/v4";

import Error from "./Error";

const FormContainer = styled.div`
  justify-self: center;
  margin: 2rem auto;
  width: 40vw;
  max-width: 400px;
`;

const FormElement = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  padding: 1rem;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);

  & input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    font-size: 1.2rem;
    background-color: transparent;
  }
  & textarea.note-body {
    min-height: 4rem;
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

  & .create-button {
    margin-top: 1rem;
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    right: 1.1rem;
    bottom: -1.1rem;
    cursor: pointer;
    color: #2c2c2c;
    border-radius: 50%;
    background-color: #3586e4;
    color: #fff;
    border: none;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
      0 2px 6px 2px rgba(60, 64, 67, 0.149);

    & span {
      font-size: 1.3rem;
      line-height: 1.3rem;
    }
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

  return (
    <FormContainer>
      {error ? <Error message="You must complete at least one field" /> : null}
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
        <button className="create-button" type="submit">
          <span>+</span>
        </button>
      </FormElement>
    </FormContainer>
  );
};

export default Form;
