import * as Yup from 'yup';
import './CONSTANTS';
import { invalidFieldsMessages, MAX_PASSWORD_LENGTH, PESEL_LENGTH, regExp } from './CONSTANTS';

export const registrationValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(invalidFieldsMessages.email)
    .required(invalidFieldsMessages.fieldRequired),
  password: Yup.string()
    .matches(regExp.password, invalidFieldsMessages.password)
    .max(MAX_PASSWORD_LENGTH, invalidFieldsMessages.password)
    .required(invalidFieldsMessages.fieldRequired),
  payerNumber: Yup.string()
    .matches(regExp.payerNumber, invalidFieldsMessages.payerNumber)
    .required(invalidFieldsMessages.payerNumber),
  pesel: Yup.string()
    .max(PESEL_LENGTH,invalidFieldsMessages.pesel)
    .required(invalidFieldsMessages.fieldRequired),
  phone: Yup.string()
    .matches(regExp.phone, invalidFieldsMessages.phone)
    .notRequired()
});