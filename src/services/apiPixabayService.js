// const BASE_URL = 'https://pixabay.com/api';

// export default class ImagesApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.perPage = 12;
//     this.key = '20723426-a11d9d4f25a339c43aea83c0e';
//   }

//   async fetchImages() {
//     const url = `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`;

//     const response = await fetch(url);

//     if (!response.ok) {
//       throw response;
//     }

//     return response
//       .json()
//       .then(({ hits }) => {
//         this.incrementPage();

//         return hits;
//       })
//       .catch(err => {
//         console.warn(err);
//       });
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }


import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const apiKey = '20723426-a11d9d4f25a339c43aea83c0e';

const fetchImages = ({ query = '', page = 1 }) => {
  return axios
    .get(
      `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${apiKey}`
    )
    .then(({ data }) => data.hits);
};

export default fetchImages;