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

  & .modal-button {
    margin-top: 1rem;
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    right: 1.1rem;
    bottom: -1.1rem;
    cursor: pointer;
    color: #2c2c2c;
    border-radius: 50%;
    background-color: #27cb2d;
    color: #fff;
    border: none;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
      0 2px 6px 2px rgba(60, 64, 67, 0.149);
    border-radius: 50%;

    & span {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
`;

const ModalContent = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 35vh;
  width: 50vw;
  max-width: 600px;
  margin: 15vh auto;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);
  background-color: #fff;

  & input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    font-size: 1.2rem;
    background-color: transparent;
  }

  & .body-label {
    height: 100%;
  }
  & textarea.modal-body {
    justify-self: stretch;
    width: 100%;
    padding: 0.5rem;
    border: none;
    resize: none;
    font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }
  & input {
    width: 300px;
    padding: 0.5rem;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const Modal = ({ currentNote, updateNote }) => {
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

  return (
    <ModalContainer>
      <ModalContent>
        <label htmlFor="title">
          <input
            type="text"
            id="title"
            placeholder="Title..."
            name="title"
            value={title}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="body" className="body-label">
          <textarea
            className="modal-body"
            type="text"
            id="body"
            placeholder="Create a note..."
            name="body"
            value={body}
            onChange={handleChange}
          />
        </label>
        <button
          className="save-button modal-button"
          type="button"
          onClick={handleSubmit}
        >
          <span>✓</span>
        </button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
