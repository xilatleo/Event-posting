import React from "react";
import { Form, Label } from "semantic-ui-react";

export const TextArea = ({
  input,
  width,
  rows,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error}>
      <textarea {...input} placeholder={placeholder} type={type} rows={rows}>
      {touched && error && <Label basic color='red'>{error}</Label>}
      </textarea>
    </Form.Field>
  );
};
