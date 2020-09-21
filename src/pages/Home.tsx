import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import get from 'lodash/get';
import HomeTemplate, { HomeTemplateProps } from '../components/templates/Home';

import bgImage from '../assets/background.png';

import { REPO_SEARCH } from '../gql';

const Home: React.FC = () => {
  const [query, setQuery] = useState('react');
  const { data, loading } = useQuery(REPO_SEARCH, { variables: { query, limit: 50 } });

  const props: HomeTemplateProps = {
    title: 'GitHub search',
    loading,
    background: bgImage,
    search: query,
    onChangeSearch: (search) => setQuery(search),
    repos: get(data, 'search.nodes', []),
  };

  return (
    <div>
      <HomeTemplate {...props} />
    </div>
  );
};

export default Home;
