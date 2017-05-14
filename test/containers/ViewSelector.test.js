import React from 'react';
import renderer from 'react-test-renderer';
import {ViewSelector} from './../../src/containers/ViewSelector';
import _ from 'lodash';

describe('viewSelector component', () => {
  it('should render default viewSelector', () => {

    const changeView = jest.fn();

    let tree = renderer.create(
      <ViewSelector
        activeView={'grid-view'}
        changeView={changeView}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <ViewSelector
        activeView={'3books-view'}
        changeView={changeView}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();

    tree = renderer.create(
      <ViewSelector
        activeView={'list-view'}
        changeView={changeView}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should change view when button is clicked', () => {
    const changeView = jest.fn();

    const tree = renderer.create(
      <ViewSelector
        activeView={'grid-view'}
        changeView={changeView}/>
    ).toJSON();

    tree.children[0].props.onClick();

    tree.children[1].props.onClick();

    tree.children[2].props.onClick();

    expect(_.flattenDeep(changeView.mock.calls))
      .toEqual(['grid-view', '3books-view', 'list-view']);
  });
});