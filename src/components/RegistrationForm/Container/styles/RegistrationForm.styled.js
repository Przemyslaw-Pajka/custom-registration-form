import styled from 'styled-components'

export const RegistrationFormStyled = styled.form`
    display: flex;
    flex-direction: column;
    padding: 15px 0 0;

    input {
    background: #f9f9f9;
    border: 1px solid #d3cfcf;
    border-radius: 7px;
    box-sizing: border-box;
    color: #c1c1c1;
    padding: 14px 20px;
    font-size: 15px;
    letter-spacing: 1.2px;
    max-height: 50px;
    font-family: var(--font-family-primary);
  }
  .log-in {
    margin-top: 22px;
    font-size: 16.5px;
    font-weight: 500;
    display: block;
  }
`