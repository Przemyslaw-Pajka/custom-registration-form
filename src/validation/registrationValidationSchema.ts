import * as Yup from 'yup';
import './CONSTANTS';
import { invalidFieldsMessages, regExp } from './CONSTANTS';

export const registrationValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(invalidFieldsMessages.email)
    .required(invalidFieldsMessages.fieldRequired),
  password: Yup.string()
    .matches(regExp.password, invalidFieldsMessages.password)
    .required(invalidFieldsMessages.fieldRequired),
  payerNumber: Yup.string()
    .matches(regExp.payerNumber, invalidFieldsMessages.payerNumber)
    .required(invalidFieldsMessages.payerNumber),
  pesel: Yup.string()
    .required(invalidFieldsMessages.fieldRequired),
  phone: Yup.string()
    .matches(regExp.phone, invalidFieldsMessages.phone)
    .notRequired()
});