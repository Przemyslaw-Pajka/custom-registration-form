import { FieldAttributes } from "formik"

export type InputProps = {
    label?: string,
    optional?: string | null,
  } & FieldAttributes<{}>

export interface FormValues {
    email: string,
    password: string,
    payerNumber: number | null,
    pesel: number | null
}