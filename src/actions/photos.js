import { getPhotos } from '../api/photosApi';
import { PHOTOS_LIST } from './types';

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

export const action2 = () => (
  dispatch => dispatch({ type: '', payload: '' })
);
