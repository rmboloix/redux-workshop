import reducer, {status} from '../../src/reducers/reducer_search';
import {SEARCH_REQUEST, SEARCH_RESPONSE}  from '../../src/actions/index';

const initialState = {
  totalItems: 0,
  status: status.NONE,
  totalPages: 0,
  activePage: 0,
  query: {
    searchTerm: '',
    searchType: '',
    resultsByPage: 0,
    startIndex: 0
  }
};

describe('search reducer', () => {
  it('should return the initial state', () => {

    expect(reducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should change search state to searching when new request', () => {
    let action = {
      type: SEARCH_REQUEST,
      payload : {
        searchTerm: 'docker',
        searchType: 'title',
        resultsByPage: 20,
        startIndex: 0
      }
    };

    const newStatePending = {
      totalItems: 0,
      status: status.SEARCHING,
      totalPages: 0,
      activePage: 0,
      query: action.payload
    };

    expect(reducer(initialState, action))
      .toEqual(newStatePending);
  });

  it('should change search state when response is received', () => {

    let previousState = {
      totalItems: 0,
      status: status.SEARCHING,
      totalPages: 0,
      activePage: 0,
      query: {
        searchTerm: 'docker',
        searchType: 'title',
        resultsByPage: 20,
        startIndex: 0
      }
    };


    let action = {
      type: SEARCH_RESPONSE,
      payload: {
        totalItems: 40,
        books: []
      }
    };

    const newStateDone = {
      status: status.DONE,
      totalItems: 40,
      totalPages: 2,
      activePage: 1,
      query : previousState.query
    };

    expect(reducer(previousState, action))
      .toEqual(newStateDone);
  });
});