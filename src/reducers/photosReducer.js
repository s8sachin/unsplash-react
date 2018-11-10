import { PHOTOS_LIST, SEARCH_VAL } from '../actions/types';

const INITIAL_STATE = {
  photosList: null,
  searchVal: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PHOTOS_LIST:
    return { ...state, photosList: action.payload };
  case SEARCH_VAL:
    return { ...state, searchVal: action.payload };
  default:
    return state;
  }
};
