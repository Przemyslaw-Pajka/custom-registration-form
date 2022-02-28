import { useContext } from "react";
import { StoreContext } from "../../store/Store";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { ModalUserRegisteredStyled } from "./styles/ModalUserRegistered.styled";

export const ModalUserRegistered:React.FC = (props) => {
    const {setIsUserRegistrationConfirmed} = useContext(StoreContext)
    
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        const root = document.getElementById('root')
        const homeBox = document.getElementById('homeBox')
        root?.classList.toggle('fixed')
        homeBox?.classList.toggle('hidden')

        setIsUserRegistrationConfirmed((prevState:boolean) => !prevState)
    }
    
    return(
        <ModalUserRegisteredStyled className="fixed">Dziękujemy! 
            <br/>Proces rejestracji użytkownika został zakończony pomyślnie.
            <SubmitButton onClick={(e)=>handleClick(e)}>Wróć</SubmitButton>
        </ModalUserRegisteredStyled> 
    )
};