import React from 'react';
import AtrapaloLogo from '../../../src/components/common/AtrapaloLogo';
import renderer from 'react-test-renderer';

describe('AtrapaloLogo', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <AtrapaloLogo />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

