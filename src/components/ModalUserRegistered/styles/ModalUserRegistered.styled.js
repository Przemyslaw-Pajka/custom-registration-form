import styled from 'styled-components'
import { ModalStyled } from '../../Modal/styles/Modal.styled'

export const ModalUserRegisteredStyled = styled(ModalStyled)`
       &.fixed {
        color: green;
        font-weight: 500;
        max-width: none;
        max-height: none;
        padding: 50px 50px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        button {
            padding: 17px 35px;
            margin-top: 10px;
        }
        @media screen and (max-width: 750px) {
            width: 75vw;
        }
        @media screen and (max-width: 450px) {
            padding: 25px;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            position: absolute;
            align-items: center;
            justify-content: center;
        }
    }
`
