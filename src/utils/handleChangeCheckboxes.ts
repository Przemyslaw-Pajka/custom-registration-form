 import { FormValues } from "../types/types"

 export const handleChangeCheckboxes = (values:FormValues) => {
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement
    const checkboxNames = ['oneDigit','amountChar','uppLowLetter']
    const regExp:{[key:string]: RegExp} = {
      oneDigit: new RegExp(/.*[0-9].*/),
      amountChar: new RegExp(/^[a-zA-Z0-9]{8,}$/),
      uppLowLetter: new RegExp(/([A-Z].*[a-z]|[a-z].*[A-Z])/)
    }
    
    checkboxNames.forEach((item:string)=>{
      const checkBoxName = `${item}Input`
      const checkboxInput = document.getElementById(checkBoxName) as HTMLInputElement;
      const isConditionMet = regExp[item].test(passwordInput.value)
      const nameValue:string = `is${item.charAt(0).toUpperCase() + item.slice(1)}`
     
      values[nameValue] = isConditionMet;
      checkboxInput.checked = isConditionMet;
    }) 
  }