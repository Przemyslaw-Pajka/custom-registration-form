import { Field, useField } from "formik";
import { InputTextFieldStyled, Label } from "./styles/InputTextField.styled";

export const InputTextField
  = ({ label, optional, children, ...props }) => {
    const [field, meta] = useField(props);

    return (
      <InputTextFieldStyled>
        <Label
          htmlFor={props.id || props.name}>
          {label}
          {optional ? (<span className="text-gray"> (opcjonalne)</span>) : null}
        </Label>
        <Field
          {...field}
          {...props}
        />
        {children}
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </InputTextFieldStyled>
    );
  };
