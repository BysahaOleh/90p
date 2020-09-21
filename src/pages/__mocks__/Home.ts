import { REPO_SEARCH } from '../../gql';

export const repoSearchMock = [
  {
    request: {
      query: REPO_SEARCH,
      variables: {
        query: 'react',
        limit: 2,
      },
    },
    result: {
      data: {
        search: {
          nodes: [
            {
              forks: {
                totalCount: 29487,
              },
              name: 'react',
              owner: {
                login: 'facebook',
              },
              stargazers: {
                totalCount: 156175,
              },
              url: 'https://github.com/facebook/react',
            },
            {
              forks: {
                totalCount: 1144,
              },
              name: 'react2',
              owner: {
                login: 'facebook2',
              },
              stargazers: {
                totalCount: 17578,
              },
              url: 'https://github.com/facebook/react2',
            },
          ],
        },
      },
    },
  },
];
