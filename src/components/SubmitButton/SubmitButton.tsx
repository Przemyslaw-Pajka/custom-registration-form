import React from "react"
import { SubmitButtonStyled } from "./styles/SubmitButton.styled"

export const SubmitButton:React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
    <SubmitButtonStyled className={props.className}>
        {props.children}
    </SubmitButtonStyled>
)