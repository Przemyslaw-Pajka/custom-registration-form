import styled from 'styled-components'

export const RegistrationFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    padding: 9px 0 0;

  input {
    margin: 0;
    background: #f9f9f9;
    border: 1px solid #d3cfcf;
    color: #000;
    border-radius: 7px;
    box-sizing: border-box;
    padding: 14px 20px;
    font-size: 15px;
    letter-spacing: 1.2px;
    max-height: 50px;
    font-family: var(--font-family-primary);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    background: #f9f9f9;
    -webkit-text-fill-color: #000;
    transition: background-color 5000s ease-in-out 0s;
}
  .log-in {
    margin-top: 22px;
    font-size: 16.5px;
    font-weight: 500;
    display: block;
  }
`