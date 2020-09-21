import { gql } from '@apollo/client';

export const REPO_SEARCH = gql`
  query search($query: String!, $limit: Int) {
    search(type: REPOSITORY, query: $query, first: $limit) {
      nodes {
        ... on Repository {
          id
          name
          owner {
            login
          }
          forks {
            totalCount
          }
          url
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;
