export const MIN_PASSWORD_LENGTH = 8;
export const MAX_PASSWORD_LENGTH = 10;
export const PESEL_LENGTH = 11;
export const PAYER_NUMBER_LENGTH = 9;

export const invalidFieldsMessages = {
    email: `Nieprawidłowy email`,
    password: `Hasło musi zawierać co najmniej ${MIN_PASSWORD_LENGTH} znaków, maksymalnie ${MAX_PASSWORD_LENGTH}, 1 małą i dużą literę oraz cyfrę. Bez polskich znaków oraz spacji`,
    payerNumber: `Nieprawidłowy numer płatnika. Numer płatnika musi się składać z ${PAYER_NUMBER_LENGTH} cyfr`,
    pesel: `Nieprawidłowy numer PESEL`,
    phone: `Nieprawidłowy numer telefonu` ,
    fieldRequired: `Pole wymagane`
}

interface IRegExp {
    [key:string]: RegExp
}

export const regExp:IRegExp = {
    phone: new RegExp(/^(?:(?:(?:(?:\+|00)\d{2})?[ -]?(?:(?:\(0?\d{2}\))|(?:0?\d{2})))?[ -]?(?:\d{3}[- ]?\d{2}[- ]?\d{2}|\d{2}[- ]?\d{2}[- ]?\d{3}|\d{7})|(?:(?:(?:\+|00)\d{2})?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}))$/),
    payerNumber: new RegExp(`^[0-9]{${PAYER_NUMBER_LENGTH}}$`),
    oneDigit: new RegExp(`(?=.*?[0-9])`),
    amountChar: new RegExp(`([A-Za-z0-9!@#$%^&*]{${MIN_PASSWORD_LENGTH},}$)`),
    uppLowLetter: new RegExp(`(?=.*[a-z])(?=.*[A-Z])`),
    get password() {
        return new RegExp(`${this.oneDigit.source}${this.uppLowLetter.source}${this.amountChar.source}`)
    }
}