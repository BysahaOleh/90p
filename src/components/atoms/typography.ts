import styled from 'styled-components';

export const H1 = styled.h1`
  ${({ theme }) => theme.typography.base};
  ${({ theme }) => theme.typography.h1};
`;

export const P = styled.p`
  ${({ theme }) => theme.typography.base};
  ${({ theme }) => theme.typography.text};
`;
