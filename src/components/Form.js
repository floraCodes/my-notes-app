import React from "react";
import styled from "@emotion/styled";

const FormContainer = styled.form``;

const NoteBodyInput = styled.input`
  width: 300px;
  padding: 0.5rem;
`;

const Form = () => {
  return (
    <FormContainer>
      <label for="note-body">
        <NoteBodyInput
          type="text"
          id="note-body"
          placeholder="Create a note..."
        />
      </label>
    </FormContainer>
  );
};

export default Form;
