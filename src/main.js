//const API_KEY = 'd17f780'
import { API_KEY } from './config.js'

console.log(API_KEY)

// $(document).ready(() => {
//   $('#searchForm').on('submit', (e) => {
//     e.preventDefault()
//     let searchText = $('#searchText').val()
//     getMovies(searchText)
//   })
// })

// function getMovies(searchText) {
//   axios
//     .get(`http://www.omdbapi.com?apikey=${API_KEY}&s=${searchText}`)
//     .then((response) => {
//       console.log(response)
//       let movies = response.data.Search
//       let output = ''
//       $.each(movies, (index, movie) => {
//         output += `
//             <div class="col-md-3">
//               <div class="well text-center">
//                 <img src="${movie.Poster}">
//                 <h5>${movie.Title}</h5>
//                 <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
//               </div>
//             </div>
//           `
//       })

//       $('#movies').html(output)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

// function movieSelected(id) {
//   sessionStorage.setItem('movieId', id)
//   window.location = 'movie.html'
//   return false
// }
