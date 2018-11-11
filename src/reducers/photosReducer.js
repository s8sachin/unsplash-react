import { PHOTOS_LIST, SEARCH_VAL, SEARCHED_PHOTOS_LIST } from '../actions/types';

const INITIAL_STATE = {
  photosList: null,
  searchVal: '',
  searchedPhotosList: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PHOTOS_LIST:
    return { ...state, photosList: action.payload };
  case SEARCH_VAL:
    return { ...state, searchVal: action.payload };
  case SEARCHED_PHOTOS_LIST:
    return { ...state, searchedPhotosList: action.payload };
  default:
    return state;
  }
};
