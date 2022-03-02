import { FieldAttributes } from "formik"

export type InputProps = {
    label?: string,
    optional?: string | null,
    errors? : any
  } & FieldAttributes<{}>

  interface ObjectKeys {
    [key: string]: string | number | boolean | undefined;
  }
  
  export type SetState = React.Dispatch<React.SetStateAction<{}>>

  export interface DataFromUser {
    email: string,
    password: string,
    payerNumber: number | '',
    pesel: number | '',
    phone?: number | '',
}
  export interface FormValues extends ObjectKeys, DataFromUser{
    isOneDigit: boolean,
    isAmountChar: boolean,
    isUppLowLetter: boolean,
}

