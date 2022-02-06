import { CheckboxGroupStyled } from "./styles/CheckboxGroup.styled"

export const CheckboxGroup: React.FC = (props) => (
    <CheckboxGroupStyled>
        {props.children}
    </CheckboxGroupStyled>
)