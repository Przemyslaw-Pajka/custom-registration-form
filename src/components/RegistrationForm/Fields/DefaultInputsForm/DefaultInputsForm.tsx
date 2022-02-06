import React from 'react';
import { FormValues } from '../../../../types/types';
import { showHidePassword } from '../../../../utils/showHidePassword';
import { SubmitButton } from '../../../SubmitButton/SubmitButton';
import { CheckboxField } from '../CheckboxField/CheckboxField';
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup';
import { InputTextField } from '../InputTextField/InputTextField';

export const DefaultInputsForm:React.FC<{values:FormValues}> = (props) => {
  return (
    <>
      <InputTextField
        id="email-input"
        label="E-MAIL"
        name="email"
        type="email-input"
        as="input"
        value={props.values.email}
        placeholder="Wpisz adres e-mail"
        required
      />
      <InputTextField
        id="password-input"
        label="HASŁO"
        name="password"
        className="password-input"
        type="password"
        as="input"
        value={props.values.password}
        placeholder="Wpisz hasło"
        required
      >
      <button className="eye-icon" onClick={showHidePassword}></button>
      </InputTextField>
      <CheckboxGroup>
        <CheckboxField
          id="oneDigit-input"
          name="oneDigit"
          type="checkbox"
          as="input"
        >
          <label>1 cyfra</label>
        </CheckboxField>
        <CheckboxField
          id="uppLowLetter-input"
          name="uppLowLetter"
          type="checkbox"
          as="input"
        >
          <label>Wielka i mała litera</label>
        </CheckboxField>
        <CheckboxField
          id="eightChar-input"
          name="8 znaków"
          type="checkbox"
          as="input"
        ><label>8 znaków</label></CheckboxField>
      </CheckboxGroup>
      <InputTextField
        id="payerNumber-input"
        label="NUMER PŁATNIKA"
        name="payerNumber"
        type="number"
        as="input"
        value={props.values.payerNumber}
        placeholder="Wpisz numer płatnika"
        required
      />
      <InputTextField
        id="pesel-input"
        label="NUMER PESEL"
        name="pesel"
        type="number"
        as="input"
        value={props.values.pesel}
        placeholder="Wpisz PESEL"
        required
      />
      <InputTextField
        id="phone-input"
        label="TELEFON"
        optional={'(opcjonalne)'}
        name="phone"
        type="tel"
        as="input"
        value={props.values.phone}
        placeholder="Wpisz numer telefonu"
      />
      <CheckboxField
        id="acceptTerms-input"
        name="acceptTerms-input"
        className="acceptTerms"
        as="input"
        type="checkbox"
        required>
        <label className='text-medium-bold'>
          Oświadczam, że zapoznałem się z treścią niniejszego <span className='text-alt-color text-medium-bold'>Regulaminu</span> <span className='text-gray text-medium-bold'>(ZGODA OBOWIĄZKOWA)</span> akceptuję jego treść i zobowiązuje się do przestrzegania go.
        </label>
      </CheckboxField>
      <SubmitButton className="submit-registration-btn">Dalej</SubmitButton>
      <a href="/" className='log-in text-alt-color text-medium-bold'>Logowanie</a>
    </>
  )
}