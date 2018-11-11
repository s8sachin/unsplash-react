import { getPhotos, getSearchPhotos } from '../api/photosApi';
import { PHOTOS_LIST, SEARCHED_PHOTOS_LIST, SEARCH_VAL } from './types';

// const removeDuplicates = (myArr, prop) => myArr.filter((obj, pos, arr) => arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos);

export const getPhotosAction = page => (
  (dispatch, getState) => {
    getPhotos({ page })
    .then((res) => {
      const { data } = res;
      const { photosReducer } = getState();
      const { photosList } = photosReducer;
      const payload = photosList ? [...photosList, ...data] : data;
      dispatch({ type: PHOTOS_LIST, payload });
    })
    .catch(({ response }) => {
      console.log(response);
    });
  }
);

export const searchPhotosAction = (searchVal, page, newSearch) => (
  (dispatch, getState) => getSearchPhotos({ searchVal, page })
  .then((res) => {
    const { data } = res;
    const { photosReducer } = getState();
    const { searchedPhotosList } = photosReducer;
    const searchValPayload = { searchVal, total: data.total, totalPages: data.total_pages };
    dispatch({ type: SEARCH_VAL, payload: searchValPayload });
    const payload = newSearch ? data.results : [...searchedPhotosList, ...data.results];
    dispatch({ type: SEARCHED_PHOTOS_LIST, payload });
  })
  .catch(({ response }) => {
    console.log(response);
  })
);
