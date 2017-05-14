import _ from 'lodash';
import { SEARCH_REQUEST } from '../../src/actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_REQUEST: {
      const { searchTerm, searchType } = action.payload;
      return _.uniqWith([...state, { searchTerm, searchType }], _.isEqual);
    }
    default:
      return state;
  }
}
