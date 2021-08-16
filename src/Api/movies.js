const API_KEY = '7e5ffe12cbe6c611d50260cb51539f45';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day'


 const getMovie = () => 
  fetch(`${BASE_URL}?api_key=${API_KEY}`)
    .then(response => response.json());


export default getMovie;