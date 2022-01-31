import { Field, useField } from "formik";
import { CheckboxFieldStyled } from "./styles/CheckboxField.styled";

export const CheckboxField = ({ label, children, ...props }) => {
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