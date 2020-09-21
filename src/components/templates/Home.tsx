import React, { useMemo } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import PropagateLoader from 'react-spinners/PropagateLoader';

import Header from '../organisms/Header';
import SearchInput from '../molecules/SearchInput';
import SearchList from '../organisms/SearchList';

export interface HomeTemplateProps {
  title: string;
  loading: boolean;
  background: string;
  search: string;
  onChangeSearch: (search: string) => void;
  repos: [];
}

const Home: React.FC<HomeTemplateProps> = ({ title, background, repos, search, onChangeSearch, loading }) => {
  const memoRepos = useMemo(() => {
    return repos.map((repo) => ({
      name: get(repo, 'name'),
      owner: get(repo, 'owner.login'),
      stars: get(repo, 'stargazers.totalCount'),
      forks: get(repo, 'forks.totalCount'),
      url: get(repo, 'url'),
    }));
  }, [repos]);
  return (
    <Container>
      <Header title={title} background={background}>
        <SearchWrapper>
          <SearchInput
            placeholder="Repo name…"
            value={search}
            onChange={(event) => onChangeSearch(event.target.value)}
          />
        </SearchWrapper>
      </Header>
      <ContentWrapper>
        <PropagateLoader loading={loading} size={20} color="#5BA6FA" />
        <SearchList repos={memoRepos} loading={loading} />
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 540px;
  box-sizing: border-box;
  height: 10px;
  bottom: -45px;
  padding: 0 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 540px;
  padding: 40px 20px 0;
  height: 100%;
  min-height: 100px;
  max-height: calc(100vh - 165px);
  overflow: auto;
`;

export default Home;
