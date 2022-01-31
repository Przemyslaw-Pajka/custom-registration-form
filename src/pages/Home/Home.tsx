import { Modal } from '../../components/Modal/Modal';
import { RegistrationForm } from '../../components/RegistrationForm/Container/RegistrationForm';
import { HomeHeading, HomeStyled } from './styles/Home.styled';

export const Home = () => {
  return (
    <Modal>
      <HomeStyled>
       <HomeHeading>Rejestracja</HomeHeading>
       <RegistrationForm/>
       </HomeStyled>
    </Modal>
  )
}

