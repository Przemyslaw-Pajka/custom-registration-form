import { FormValues } from "../types/types"
import { regExp } from "../validation/CONSTANTS"

 export const handleChangeCheckboxes = (values:FormValues) => {
    const passwordInput = document.getElementById('passwordInput') as HTMLInputElement
    const checkboxNames = ['oneDigit','amountChar','uppLowLetter']
    
    checkboxNames.forEach((item:string)=>{
      const checkBoxName = `${item}Input`
      const checkboxInput = document.getElementById(checkBoxName) as HTMLInputElement;
      const isConditionMet = regExp[item].test(passwordInput.value)
      const nameValue:string = `is${item.charAt(0).toUpperCase() + item.slice(1)}`
     
      values[nameValue] = isConditionMet;
      checkboxInput.checked = isConditionMet;
    }) 
  }