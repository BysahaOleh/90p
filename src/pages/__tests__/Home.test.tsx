import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';

import Home from '../Home';

import { repoSearchMock } from '../__mocks__/Home';

jest.mock('../../components/templates/Home', () => {
  return function HomeTemplate() {
    return <span>Mock Home Template</span>;
  };
});

test('should render Home page', () => {
  render(
    <MockedProvider mocks={repoSearchMock} addTypename={false}>
      <Home />
    </MockedProvider>,
  );
});
