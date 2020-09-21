import styled from 'styled-components';

export const TextInput = styled.input`
  ${({ theme }) => theme.typography.base};
  ${({ theme }) => theme.typography.text};
  border: none;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textPlaceholder};
  }
`;
