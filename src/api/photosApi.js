import axios from 'axios';

const clientId = '01078c9ec7bb26cf206dd5d695c697a7242d46966055aa032f6c98dea19d118f';
const API_URL = 'https://api.unsplash.com';

export const getPhotos = params => axios({
  method: 'get',
  url: `${API_URL}/photos/?client_id=${clientId}&page=${params.page}`,
});

export const getSearchPhotos = params => axios({
  method: 'get',
  url: `${API_URL}/search/photos/?client_id=${clientId}&page=${params.page}`,
});
