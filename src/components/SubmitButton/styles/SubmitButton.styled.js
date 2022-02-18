import styled from 'styled-components'
import { PrimaryButtonStyle } from '../../../styles/PrimaryButtonStyle'

export const SubmitButtonStyled = styled.button`
    ${PrimaryButtonStyle}
    cursor: pointer;

    &.submit-registration-btn {
        max-width: 180px;
        margin: 0 auto;
        margin-top: 29px;
        border-radius: 40px;
        padding: 16px 70.5px;
        font-weight: 700;
        font-size: 16px;;
        box-shadow: 0px 2px 6px #b7b7b7;
    }
`