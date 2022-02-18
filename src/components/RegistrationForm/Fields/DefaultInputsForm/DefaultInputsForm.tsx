import React from 'react';
import { FormValues } from '../../../../types/types';
import { handleChangeCheckboxes } from '../../../../utils/handleChangeCheckboxes';
import { showHidePassword } from '../../../../utils/showHidePassword';
import { MIN_PASSWORD_LENGTH } from '../../../../validation/CONSTANTS';
import { validatePesel } from '../../../../validation/validatePesel';
import { SubmitButton } from '../../../SubmitButton/SubmitButton';
import { CheckboxField } from '../CheckboxField/CheckboxField';
import { CheckboxGroup } from '../CheckboxGroup/CheckboxGroup';
import { InputTextField } from '../InputTextField/InputTextField';

export const DefaultInputsForm:React.FC<{values:FormValues}> = React.memo((props) => (
    <>
      <InputTextField
        id="emailInput"
        label="E-MAIL"
        name="email"
        type="email"
        as="input"
        value={props.values.email}
        placeholder="Wpisz adres e-mail"
        required
      />
      <InputTextField
        id="passwordInput"
        label="HASŁO"
        name="password"
        className="passwordInput"
        type="password"
        as="input"
        value={props.values.password}
        onKeyUp={()=>handleChangeCheckboxes(props.values)}
        placeholder="Wpisz hasło"
        required
      >
      <button className="eye-icon" onClick={showHidePassword}></button>
      </InputTextField>
      <CheckboxGroup>  
        <CheckboxField
          id="oneDigitInput"
          name="isOneDigit"
          type="checkbox"
          disabled
          as="input"
          required
        >
          <label>1 cyfra</label>
        </CheckboxField>
        <CheckboxField
          id="uppLowLetterInput"
          name="isUppLowLetter"
          type="checkbox"
          disabled
          as="input"
          required
        >
          <label>Wielka i mała litera</label>
        </CheckboxField>
        <CheckboxField
          id="amountCharInput"
          name="isAmountChar"
          type="checkbox"
          disabled
          as="input"
          required
        ><label>{MIN_PASSWORD_LENGTH} znaków</label></CheckboxField>
      </CheckboxGroup>
      <InputTextField
        id="payerNumberInput"
        label="NUMER PŁATNIKA"
        name="payerNumber"
        type="number"
        as="input"
        value={props.values.payerNumber}
        placeholder="Wpisz numer płatnika"
        required
      />
      <InputTextField
        id="peselInput"
        label="NUMER PESEL"
        name="pesel"
        type="number"
        validate={validatePesel}
        as="input"
        value={props.values.pesel}
        placeholder="Wpisz PESEL"
        required
      />
      <InputTextField
        id="phoneInput"
        label="TELEFON"
        optional={'(opcjonalne)'}
        name="phone"
        type="tel"
        as="input"
        value={props.values.phone}
        placeholder="Wpisz numer telefonu"
      />
      <CheckboxField
        id="acceptTermsInput"
        name="acceptTermsInput"
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
)
