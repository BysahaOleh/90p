import React from 'react';
import styled from 'styled-components';

export enum IconName {
  star = 'star',
  fork = 'fork',
  search = 'search',
}

interface IconProps {
  name: IconName;
  size?: number;
}

interface IconElementProps {
  size?: number;
}

const Icon: React.FC<IconProps> = ({ name, size }) => (
  <IconImage size={size} src={require(`../../assets/${name}.svg`)} />
);

const IconImage = styled.img<IconElementProps>`
  height: ${({ size }) => size || 18};
`;

export default Icon;
