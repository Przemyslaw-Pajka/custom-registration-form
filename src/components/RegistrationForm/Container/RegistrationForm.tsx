import { Formik } from "formik";
import { FormValues } from '../../../types/types';
import { DefaultInputsForm } from "../Fields/DefaultInputsForm/DefaultInputsForm";
import { RegistrationFormStyled } from "./styles/RegistrationForm.styled.js";

interface PropsValues{
  values: FormValues,
  handleReset?: () => {},
  handleSubmit?: () => {},
  handleChange?: () => {}
}

export const RegistrationForm:React.FC = () => {
  const initialValues:FormValues = {
    email:'',
    password: '',
    payerNumber: '',
    pesel: '',
    phone: '',
  }
  return (
    <Formik
    initialValues={initialValues}
      onSubmit={(values) => {
        console.log("SUBMITTED",values)
      }}>
      {(props:PropsValues) => (
        <RegistrationFormStyled
          autocomplete="off"
          onReset={props.handleReset}
          onSubmit={props.handleSubmit}>
          <DefaultInputsForm values={props.values}/>
        </RegistrationFormStyled>
      )}
    </Formik>
  );
}