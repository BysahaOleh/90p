import styled from 'styled-components';

interface BackgroundProps {
  src: string;
}

const Background = styled.div<BackgroundProps>`
  width: 100%;
  height: 165px;
  background-image: url(${({ src }) => src || ''});
  background-position: center;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export default Background;
