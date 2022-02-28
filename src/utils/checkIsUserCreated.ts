import { SetState } from "../types/types"

interface Response {
    [key:string]: {}
}

export const checkIsUserCreated = (response:Response, setIsUserRegistrationConfirmed:SetState, setIsLoading:SetState, setErrors:SetState) => {
    if (response.isNewUserCreated) {
        const root = document.getElementById('root')
        const homeBox = document.getElementById('homeBox')
        root?.classList.toggle('fixed')
        homeBox?.classList.toggle('hidden')

        setIsUserRegistrationConfirmed(true)
        setIsLoading(false);

        return false;

    } else {
        setErrors(response.errorMessagesObject);
        setIsLoading(false);
    }
}