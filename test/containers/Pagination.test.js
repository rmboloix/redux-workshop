import React from 'react';
import renderer from 'react-test-renderer';
import {Pagination} from './../../src/containers/Pagination';
import _ from 'lodash';

const search = {
    status: 'DONE',
    totalPages: 3,
    activePage: 1
  },
  changePage = jest.fn();

describe('Pagination component', () => {
  it('should render correctly on first page', () => {

    let tree = renderer.create(
      <Pagination
        search={search}
        changePage={changePage}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly on last page', () => {

    let tree = renderer.create(
      <Pagination
        search={{...search, activePage: 3}}
        changePage={changePage}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render correctly on middle page', () => {

    let tree = renderer.create(
      <Pagination
        search={{...search, activePage: 2}}
        changePage={changePage}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should change pages correctly', () => {

    let tree = renderer.create(
      <Pagination
        search={{...search, activePage: 2}}
        changePage={changePage}/>
    ).toJSON();

    let prevLink = tree.children[0].children[0].children[0];
    prevLink.props.onClick();

    let nextLink = tree.children[0].children[1].children[0];
    nextLink.props.onClick();

    expect(_.flattenDeep(changePage.mock.calls))
      .toEqual([1,3]);
  });
});