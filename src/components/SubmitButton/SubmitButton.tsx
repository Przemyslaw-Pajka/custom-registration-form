import React from "react"
import { SubmitButtonStyled } from "./styles/SubmitButton.styled"

export const SubmitButton:React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return(
    <SubmitButtonStyled className={props.className} onClick={props.onClick}>
        {props.children}
    </SubmitButtonStyled>
)}