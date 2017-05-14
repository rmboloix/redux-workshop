import reducer from '../../src/reducers/reducer_activeView';
import {CHANGE_VIEW} from '../../src/actions/index';

describe('active view reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual('3books-view')
  });

  it('should change the view', () => {
    let action = {
      type: CHANGE_VIEW,
      payload: 'newView'
    };

    expect(reducer(undefined, action))
      .toEqual('newView');
  });
});