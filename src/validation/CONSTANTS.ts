export const MIN_PASSWORD_LENGTH = 8;
export const MAX_PASSWORD_LENGTH = 10;
export const PESEL_LENGTH = 11;
export const PAYER_NUMBER_LENGTH = 9;

export const invalidFieldsMessages = {
    email: `Incorrect email`,
    date: `Incorrect date`,
    time: `Incorrect time`,
    phone: `Incorrect phone number`,
    fieldRequired: 'Field is require'
}

interface IRegExp {
    [key:string]: RegExp
}

export const regExp:IRegExp = {
    phone: new RegExp(/^(?:(?:(?:(?:\+|00)\d{2})?[ -]?(?:(?:\(0?\d{2}\))|(?:0?\d{2})))?[ -]?(?:\d{3}[- ]?\d{2}[- ]?\d{2}|\d{2}[- ]?\d{2}[- ]?\d{3}|\d{7})|(?:(?:(?:\+|00)\d{2})?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}))$/),
}