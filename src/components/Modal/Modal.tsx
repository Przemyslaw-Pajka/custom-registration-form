import { ModalStyled } from "./styles/Modal.styled"

export const Modal: React.FC = (props) => (
    <ModalStyled>
        {props.children}
    </ModalStyled>
)