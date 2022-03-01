import { Formik } from "formik";
import React, { useContext } from "react";
import { StoreContext } from "../../../store/Store";
import { FormValues } from '../../../types/types';
import { sendForm } from "../../../utils/sendForm";
import { registrationValidationSchema } from '../../../validation/registrationValidationSchema';
import { DefaultInputsForm } from "../Fields/DefaultInputsForm/DefaultInputsForm";
import { RegistrationFormStyled } from "./styles/RegistrationForm.styled.js";

interface PropsValues{
  values: FormValues,
  handleReset?: () => {},
  handleSubmit?: () => {},
  handleChange?: () => {}
}

export const RegistrationForm:React.FC = React.memo((props) => {
  const {
    errors,
    setErrors,
    isLoading,
    setIsLoading,
    setIsUserRegistrationConfirmed
  } = useContext(StoreContext)

  const initialValues:FormValues = {
    date:'',
    time: '',
    email: '',
    phone: '',
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registrationValidationSchema}
      onSubmit={(values) => {
        const dataFromUser = {
          date: values.date,
          time: values.time,
          email: values.email,
          phone: values.phone
        }
        sendForm (
          dataFromUser,
          setIsLoading,
          setErrors,
          setIsUserRegistrationConfirmed
        )
      }}
      >
      {(props:PropsValues) => (
        <RegistrationFormStyled
          id="formRegistration"
          autocomplete="off"
          onReset={props.handleReset}
          onSubmit={props.handleSubmit}>
          <DefaultInputsForm 
            values={props.values} 
            errors={errors}
            setErrors={setErrors} 
            isLoading={isLoading}
          />
        </RegistrationFormStyled>
      )}
    </Formik>
  );
})