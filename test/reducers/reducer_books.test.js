import reducer from './../../src/reducers/reducer_books';
import {SEARCH_RESPONSE}  from '../../src/actions/index';

describe('reducer books', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual([]);
  });

  it('should return void list when not valid response', () => {
    let action = {
      type: SEARCH_RESPONSE,
      payload: {}
    };
    expect(reducer(undefined, action))
      .toEqual([]);
  });

  it('should return a list of books when valid response', () => {
    let action = {
      type: SEARCH_RESPONSE,
      payload: {
        // totalItems: response.data.totalItems,
        books: [{id:1}, {id:2}, {id:3}]
      }
    };

    let result = reducer(undefined, action);

    expect(result)
      .toEqual(action.payload.books);

    expect(result).toHaveLength(3);
  });
});