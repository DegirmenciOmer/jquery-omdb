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
  console.log(movieId)
  // Use the movieId to fetch the movie details
  axios
    .get(`http://www.omdbapi.com?apikey=${process.env.API_KEY}&i=${movieId}`)
    .then((response) => {
      console.log(response.data)
      const movie = response.data
      let output = `<div class="row">
      <div class="col-md-4">
        <img src="${movie.Poster}" class="thumbnail">
      </div>
      <div class="col-md-8">
        <h2>${movie.Title}</h2>
        <ul class="list-group">
          <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
          <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
          <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
          <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
          <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
          <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
          <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="well">
        <h3>Plot</h3>
        ${movie.Plot}
        <hr>
        <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
        <a href="index.html" class="btn btn-default">Go Back To Search</a>
      </div>
    </div>
      `
      $('#movie').html(output)
    })
    .catch((err) => {
      console.log(err)
    })
}