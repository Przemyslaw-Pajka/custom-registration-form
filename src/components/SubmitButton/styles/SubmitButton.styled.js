import styled from 'styled-components'
import { PrimaryButtonStyle } from '../../../styles/PrimaryButtonStyle'

export const SubmitButtonStyled = styled.button`
    ${PrimaryButtonStyle}
    cursor: pointer;
    border-radius: 40px;
    font-weight: 700;
    font-size: 16px;;
    box-shadow: 0px 2px 6px #b7b7b7;
    margin: 0 auto;
    
    &.submit-registration-btn {
        margin-top: 29px;
        padding: 16px 70.5px;
    }
`