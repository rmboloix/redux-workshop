import React from 'react';
import renderer from 'react-test-renderer';
import {SearchHistory} from './../../src/containers/SearchHistory';

const history = [
    {
      searchTerm: 'docker',
      searchType: 'title'
    },
    {
      searchTerm: 'kubernetes',
      searchType: 'title'
    },
    {
      searchTerm: 'robert c. martin',
      searchType: 'author'
    }
  ],
  newSearch = jest.fn();

describe('SearchHistory component', () => {
  it('should render empty list', () => {

    let tree = renderer.create(
      <SearchHistory
        searchHistory={[]}
        newSearch={newSearch}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  it('should render history list', () => {
    let tree = renderer.create(
      <SearchHistory
        searchHistory={history}
        newSearch={newSearch}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });


  it('should do a new search when button is clicked', () => {
    let tree = renderer.create(
      <SearchHistory
        searchHistory={history}
        newSearch={newSearch}/>
    ).toJSON();

    tree.children[1].children[0].children[2].props.onClick();

    expect(newSearch.mock.calls[0])
      .toEqual(['robert c. martin', 'author', 20, 0]);
  });
});