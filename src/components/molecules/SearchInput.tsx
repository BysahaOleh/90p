import React from 'react';
import styled from 'styled-components';

import { TextInput } from '../atoms/inputs';
import Icon, { IconName } from '../atoms/Icon';

export interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <Container>
      <IconContainer>
        <Icon name={IconName.search} size={24} />
      </IconContainer>
      <StyledInput {...props} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  height: 60px;
  box-shadow: rgba(42, 34, 34, 0.18) 0 2px 4px 0;
`;

const StyledInput = styled(TextInput)`
  padding-left: 15px;
  outline: none;
`;

const IconContainer = styled.div`
  width: 60px;
  min-width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SearchInput;
