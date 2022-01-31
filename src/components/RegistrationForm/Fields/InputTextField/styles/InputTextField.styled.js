import styled from "styled-components";

export const InputTextFieldStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  &:not(:first-of-type) {
    padding-top: 16px;
  }
  input::placeholder {
    color: #c1c1c1;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .password-input::after {
    content: '';
    display: block;
    background: red;
    z-index: 100;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
  .eye-icon {
    background: url('assets/images/eye-slash-solid.svg');
    filter: invert(97%) sepia(8%) saturate(394%) hue-rotate(130deg) brightness(95%) contrast(92%);
    transform: scaleX(-1);
    display: block;
    width: 21px;
    height: 21px;
    position: absolute;
    bottom: 13px;
    right: 17px;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
}
`;
export const Label = styled.label`
  text-align: left;
  font-size: 12px;
  font-weight: 700;
  padding-left: 20px;
  padding-bottom: 3.5px;
  span {
    font-size: 12px;
  }
`;