import React from "react"
import { CheckboxGroupStyled } from "./styles/CheckboxGroup.styled"

export const CheckboxGroup: React.FC = React.memo((props) => (
    <CheckboxGroupStyled>
        {props.children}
    </CheckboxGroupStyled>
))