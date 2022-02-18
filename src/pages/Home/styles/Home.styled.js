import styled from 'styled-components'

export const HomeStyled = styled.div`
   text-align: center;
   max-width:722px;
   box-sizing: border-box;
   padding: 58px 72px 58px;
   
   @media (max-width:450px) {
      height: 100vh;
      padding: 58px 15px 58px;
      padding-top: 0;
      .submit-registration-btn,.log-in {
         margin-top: 10px;
      }
   }
`
export const HomeHeading = styled.h1`
   font-weight: 400;
   color: var(--font-color-primary);
   font-size: 28px;
   margin: 0;
   &::first-letter {
      font-size: 32px;
   }
`