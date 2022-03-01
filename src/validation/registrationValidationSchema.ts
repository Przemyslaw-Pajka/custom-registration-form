import * as Yup from 'yup';
import './CONSTANTS';
import { invalidFieldsMessages, regExp } from './CONSTANTS';

export const registrationValidationSchema = Yup.object().shape({
  date: Yup.string()
    .required(invalidFieldsMessages.fieldRequired),
  time: Yup.string()
    .required(invalidFieldsMessages.fieldRequired),
  email: Yup.string()
    .email(invalidFieldsMessages.email)
    .required(invalidFieldsMessages.fieldRequired),
  phone: Yup.string()
    .matches(regExp.phone, invalidFieldsMessages.phone)
    .required(invalidFieldsMessages.fieldRequired),
});