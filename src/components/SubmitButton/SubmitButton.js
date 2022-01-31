import { SubmitButtonStyled } from "./styles/SubmitButton.styled"

export const SubmitButton = (props) => (
    <SubmitButtonStyled className={props.className}>
        {props.children}
    </SubmitButtonStyled>
)