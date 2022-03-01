import { useContext } from 'react';
import { Modal } from '../../components/Modal/Modal';
import { ModalUserRegistered } from '../../components/ModalUserRegistered/ModalUserRegistered';
import { RegistrationForm } from '../../components/RegistrationForm/Container/RegistrationForm';
import { StoreContext } from '../../store/Store';
import { HomeHeading, HomeStyled } from './styles/Home.styled';


export const Home = () => {
  const {isUserRegistrationConfirmed} = useContext(StoreContext)

  return (
    <Modal>
      <HomeStyled id="homeBox">
       <HomeHeading>Registration</HomeHeading>
       <RegistrationForm />
       </HomeStyled>
       {isUserRegistrationConfirmed? <ModalUserRegistered/>: null}
    </Modal>
  )
}

