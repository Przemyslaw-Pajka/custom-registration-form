import { DataFromUser, SetState } from "../types/types";
import { checkIsUserCreated } from "./checkIsUserCreated";
import { URL_TO_SEND_DATA } from "./CONSTANTS";

export const sendForm = (dataFromUser:DataFromUser, setIsLoading:SetState, setErrors:SetState, setIsUserRegistrationConfirmed:SetState) => {
    setIsLoading(true);

    fetch(URL_TO_SEND_DATA, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataFromUser)
    })
        .then((res) => res.json())
        .then((data) => {
            const response = JSON.parse(JSON.stringify(data))
            
            checkIsUserCreated(response, setIsUserRegistrationConfirmed, setIsLoading, setErrors)
        })
        .catch(err => console.log(err))
}