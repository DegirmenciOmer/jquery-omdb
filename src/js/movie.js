import $ from 'jquery'
import '../styles/main.scss'
import axios from 'axios'
import moviePoster from '../images/movie.jpg'

$(function () {
  getMovie()
  $('#navigateToMoviePage').on('click', () => {
    window.location.href = 'movie.html'
  })
})

function getMovie() {
  const urlParams = new URLSearchParams(window.location.search)
  const movieId = urlParams.get('id')
  // Use the movieId to fetch the movie details
  axios
    .get(`http://www.omdbapi.com?apikey=${process.env.API_KEY}&i=${movieId}`)
    .then((response) => {
      const movie = response.data
      let output = `<div class="single-movie">
        <img src="${movie.Poster}" class="thumbnail">
      <div class="container">
      <ul >
      <h2>${movie.Title}</h2>
          <li><strong>Genre:</strong> ${movie.Genre}</li>
          <li><strong>Released:</strong> ${movie.Released}</li>
          <li><strong>Rated:</strong> ${movie.Rated}</li>
          <li><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
          <li><strong>Director:</strong> ${movie.Director}</li>
          <li><strong>Writer:</strong> ${movie.Writer}</li>
          <li><strong>Actors:</strong> ${movie.Actors}</li>
        </ul>
      </div>
      <div class="container">
        <h3>Plot</h3>
        <p class="mb">${movie.Plot}<p/>
        <div >
        <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
        <a href="index.html" class="btn ">Go Back To Search</a>
        </div>
      </div>
    </div>
      
      `
      $('#movie').html(output)
    })
    .catch((err) => {
      console.log(err)
    })
}
