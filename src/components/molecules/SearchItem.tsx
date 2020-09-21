import React from 'react';
import styled from 'styled-components';

import { P } from '../atoms/typography';
import Icon, { IconName } from '../atoms/Icon';

export interface SearchItemProps {
  name: string;
  owner: string;
  stars: number;
  forks: number;
  url: string;
}

interface ContentElementProps {
  last?: boolean;
}

const SearchItem: React.FC<SearchItemProps> = ({ name, stars, forks, owner, url }) => {
  return (
    <Link href={url} target="_blank">
      <Container>
        <P>
          {owner}/{name}
        </P>
        <Content>
          <CountContainer>
            <Icon name={IconName.star} />
            <Count>{stars}</Count>
          </CountContainer>
          <CountContainer last>
            <Icon name={IconName.fork} />
            <Count>{forks}</Count>
          </CountContainer>
        </Content>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  box-shadow: rgba(42, 34, 34, 0.18) 0 2px 4px 0;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 6px;
  margin: 20px 0;

  @media screen and (min-width: 765px) {
    display: flex;
    align-items: center;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const Content = styled.div`
  display: flex;
  padding-top: 10px;

  @media screen and (min-width: 765px) {
    padding: 0;
    margin-left: auto;
  }
`;

const CountContainer = styled.div<ContentElementProps>`
  margin-right: ${({ last }) => (last ? 0 : 20)}px;
  display: flex;
`;

const Count = styled(P)`
  margin-left: 10px;
`;

export default SearchItem;
