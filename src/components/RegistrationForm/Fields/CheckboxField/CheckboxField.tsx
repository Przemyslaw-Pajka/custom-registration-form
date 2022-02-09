import { Field, useField } from "formik";
import React from "react";
import { InputProps } from "../../../../types/types";
import { CheckboxFieldStyled } from "./styles/CheckboxField.styled";

export const CheckboxField:React.FC<InputProps> = ({ label, children, ...props }) => {
    const [field] = useField(props);

    return (
        <CheckboxFieldStyled className={props.className}>
            <Field
                {...props}
                {...field}      
            />
            <span className="checkmark"></span>
            {children}
        </CheckboxFieldStyled>
    );
}