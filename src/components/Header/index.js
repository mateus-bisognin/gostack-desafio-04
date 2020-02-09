import React from 'react';
import { MdAccountCircle } from 'react-icons/md';

import { Container } from './styles';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt=""></img>
      <div>
        <p>Meu perfil</p>
        <MdAccountCircle size={24} color={'#fff'} />
      </div>
    </Container>
  );
}
