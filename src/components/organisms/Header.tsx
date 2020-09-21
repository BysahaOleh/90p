import React from 'react';
import styled from 'styled-components';
import Background from '../atoms/Background';
import { H1 } from '../atoms/typography';

export interface HeaderProps {
  background: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ background, title, children }) => {
  return (
    <Background src={background}>
      <Container>
        <Title>{title}</Title>
        {children}
      </Container>
    </Background>
  );
};

const Title = styled(H1)`
  color: ${({ theme }) => theme.colors.white};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Header;
