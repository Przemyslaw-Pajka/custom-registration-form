import { Field, useField } from "formik";
import { InputProps } from "../../../../types/types";
import { InputTextFieldStyled, Label } from "./styles/InputTextField.styled";


export const InputTextField: React.FC<InputProps> = ({ label, optional, errors, children,...props}) => {
    const [field, meta] = useField(props);
    
    return (
      <InputTextFieldStyled className={( props.value && !meta.error)? 'valid' : ''}>
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
        {(meta.touched && meta.error) || errors ? (
          <div className="error">{meta.error || errors[props.name]}</div>
        ) : null}
      </InputTextFieldStyled>
    );
  };
