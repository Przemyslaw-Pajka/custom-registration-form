import { Modal } from "../../components/Modal/Modal"
import { Error404Styled, LinkStyled } from "./styles/Error404.styled"

export const Error404 = () => (
    <Modal>
        <Error404Styled>
            <h1>404 - Not Found!</h1>
            <LinkStyled to="/">Back to homepage</LinkStyled>
        </Error404Styled>
    </Modal>
)