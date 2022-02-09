import { FieldAttributes } from "formik"

export type InputProps = {
    label?: string,
    optional?: string | null,
  } & FieldAttributes<{}>

  interface IObjectKeys {
    [key: string]: string | number | boolean | undefined;
  }
  
export interface FormValues extends IObjectKeys{
    email: string,
    password: string,
    payerNumber: number | '',
    pesel: number | '',
    phone?: number | '',
    isOneDigit: boolean,
    isAmountChar: boolean,
    isUppLowLetter: boolean,
}

