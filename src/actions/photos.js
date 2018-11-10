import { getPhotos } from '../api/photosApi';
import { PHOTOS_LIST } from './types';

// const removeDuplicates = (myArr, prop) => myArr.filter((obj, pos, arr) => arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos);

export const getPhotosAction = page => (
  (dispatch, getState) => {
    getPhotos({ page })
    .then((res) => {
      const { data } = res;
      // const { tdObjReducer } = getState();
      const payload = data;
      // if (tdObjReducer.tdObjects.categories) {
      //   const { categories } = tdObjReducer.tdObjects;
      //   const newArr = removeDuplicates(categories.concat(data.categories), '_id');
      //   const newObj = { categories: newArr };
      //   Object.assign(payload, newObj);
      // } else {
      //   payload = data;
      // }
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
