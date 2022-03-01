import React from 'react';
import { FormValues, SetState } from '../../../../types/types';
import { CircleLoader } from '../../../CircleLoader/CircleLoader';
import { SubmitButton } from '../../../SubmitButton/SubmitButton';
import { InputTextField } from '../InputTextField/InputTextField';

interface Errors {
  key: string
}

export const DefaultInputsForm:React.FC<{values:FormValues,errors:Errors,setErrors:SetState,isLoading:boolean}> = React.memo((props) => {
  return (
    <>
      <InputTextField
        id="dateInput"
        label="DATE"
        onKeyUp={()=>props.setErrors(()=> {})}
        name="date"
        type="date"
        as="input"
        value={props.values.date}
        required
      />
      <InputTextField
        id="timeInput"
        label="TIME"
        onKeyUp={()=>props.setErrors(()=> {})}
        name="time"
        type="time"
        as="input"
        value={props.values.time}
        placeholder="Please enter time"
        required
      />
       <InputTextField
        id="emailInput"
        label="E-MAIL"
        name="email"
        onKeyUp={()=>props.setErrors(()=> {})}
        type="email"
        as="input"
        errors={props.errors}
        value={props.values.email}
        placeholder="Wpisz adres e-mail"
        required
      />
      <InputTextField
        id="phoneInput"
        label="TELEFON"
        onKeyUp={()=>props.setErrors(()=> {})}
        name="phone"
        type="tel"
        as="input"
        errors={props.errors}
        value={props.values.phone}
        placeholder="Please enter phone number"
        required
      />
      <SubmitButton className="submit-registration-btn">{props.isLoading?   <CircleLoader/> : 'Submit'}</SubmitButton>
    </>
  )
}
)