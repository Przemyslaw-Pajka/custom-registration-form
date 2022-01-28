import { SubmitButtonStyled } from "./styles/SubmitButton.styled"

export const SubmitButton: React.FC = (props) => (
    <SubmitButtonStyled>
        {props.children}
    </SubmitButtonStyled>
)