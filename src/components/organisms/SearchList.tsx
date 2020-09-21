import React, { memo } from 'react';
import styled from 'styled-components';

import { P } from '../atoms/typography';
import SearchItem, { SearchItemProps } from '../molecules/SearchItem';

export interface SearchListProps {
  repos: SearchItemProps[];
  loading: boolean;
}

const SearchList: React.FC<SearchListProps> = ({ repos, loading }) => {
  return (
    <Container>
      {!repos.length && !loading && <Message>The list is empty. Please use the search above...</Message>}
      {repos.map((repo) => (
        <SearchItem key={`${repo.name}-${repo.owner}`} {...repo} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Message = styled(P)`
  margin-top: 60px;
  text-align: center;
`;

export default memo(SearchList);
