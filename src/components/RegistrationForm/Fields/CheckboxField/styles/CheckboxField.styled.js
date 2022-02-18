import styled from 'styled-components'

export const CheckboxFieldStyled = styled.div`
  padding-left: 22px;
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  top: 0;
  transform: translateY(-50%);
  left: 0;
  width: 16px;
  height: 16px;
  z-index: 25;
  border-radius: 3px;
}
.checkmark {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  height: 16px;
  width: 16px;
  background-color: #fff;
  border:1px solid #d3cfcf;
  border-radius: 3px;
  box-sizing: border-box;
}
input:checked ~ .checkmark {
  background-color: #fff;
}
input:checked ~ .checkmark:after {
  display: block;
}
.checkmark:after {
  content: "";
  display: none;
  position: absolute;
  left: 5px;
  top: 0%;
  width: 5px;
  height: 10px;
  border: solid #07df07;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
label {
  text-align: left;
  margin-right: 25px;
  font-size: 12px;
}
&.acceptTerms {
  padding-left: 34px;
  margin-top: 15px;
  line-height: 1.6;
  [name=acceptTermsInput],.checkmark{
    width: 21px;
    height: 21px;
    transform: none;
    margin: 0;
  }
  [name=acceptTermsInput]{
    width: 21px;
    height: 21px;
    transform: none;
    margin: 0;
  }
      .checkmark {
        background: #f7f7f7;
        top: 0px;
        transform: none;
        &::after {
          left: 6px;
          top: 2px;
        }
      }
     label {
       font-size: 13.5px;
       font-weight: 400;
     }
  }
`
