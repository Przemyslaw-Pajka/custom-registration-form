import { invalidFieldsMessages } from "./CONSTANTS";

export const validatePesel = (value:number) => {
    const pesel = String(value);
    let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
        let sum = 0;
        let control = 10;
        const controlNumber = parseInt(pesel.substring(10, 11));

        weight.forEach((item,index)=> sum += (parseInt(pesel.substring(index, index + 1)) * weight[index]));
        
        sum = sum % 10;

        if (sum === 0){
            control = 0;
        }

        const isPeselCorrect = control - sum === controlNumber
       
        return isPeselCorrect? '' : invalidFieldsMessages.pesel
  };