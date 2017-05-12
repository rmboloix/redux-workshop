import React from 'react';
import Header from '../../../src/components/common/Header';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  Date = jest.fn(() => {
    return {
      toLocaleDateString: function() {
        return '2017 M04 8, Sat';
      }
    }
  });
  const tree = renderer.create(
    <Header />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
