import React from 'react';

import imgLogo from '../../assets/logo.png';
import { Container, Profile } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={imgLogo} alt="logo" title="Logo" />

      <Profile>
        <p>Nome do candidato</p>
        <p>Teste de Front-end</p>

        <div>
          <strong>HL</strong>
        </div>
      </Profile>
    </Container>
  );
};

export default Header;
