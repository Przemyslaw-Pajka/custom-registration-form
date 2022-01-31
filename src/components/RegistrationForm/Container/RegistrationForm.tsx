import { Formik } from "formik";
import { DefaultInputsForm } from "../Fields/DefaultInputsForm/DefaultInputsForm";
import { RegistrationFormStyled } from "./styles/RegistrationForm.styled.js";

export const RegistrationForm = () => {
    return (
        <Formik
        initialValues={{
            email:'',
            password: '',
            payerNumber: null,
            pesel: '',
        }}
       
          onSubmit={(values) => {
            console.log(values)
          }}>
          {(props) => (
            <RegistrationFormStyled
              onReset={props.handleReset}
              onSubmit={props.handleSubmit}>
              <DefaultInputsForm values={props.values} />
            </RegistrationFormStyled>
          )}
        </Formik>
      );
}