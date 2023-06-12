import $ from 'jquery'
import './styles/main.scss'
import axios from 'axios'
import moviePoster from './images/movie.jpg'

$(function () {
  getMovies('home')

  $('#searchForm').on('submit', (e) => {
    e.preventDefault()
    let searchValue = $('#searchText').val()
    getMovies(searchValue)
    console.log(searchValue)
  })

  $('#navigateToMoviePage').on('click', () => {
    window.location.href = 'movie.html'
  })
})

function movieSelected(imdbID) {
  console.log(imdbID)
  localStorage.setItem('selectedMovieID', imdbID)
  // Redirect to the movie page
  window.location.href = 'movie.html'
}

function getMovies(searchText) {
  axios
    .get(
      `https://www.omdbapi.com?apikey=${process.env.API_KEY}&s=${searchText}`
    )
    .then((response) => {
      console.log(response.data.Search)
      let movies = response.data.Search
      let output = ''
      $.each(movies, (index, movie) => {
        output += `
              <div class="movie">
                <div class="well text-center">
                  <img src="${
                    movie.Poster === 'N/A' ? moviePoster : movie.Poster
                  }">
                  <h5>${movie.Title}</h5>
                  <a href="movie.html?id=${
                    movie.imdbID
                  }" class="btn secondary">Movie Details</a>

                </div>
              </div>
            `
      })

      $('#movies').html(output)
    })
    .catch((err) => {
      console.log(err)
    })
}

function getMovie() {
  const urlParams = new URLSearchParams(window.location.search)
  const movieId = urlParams.get('id')
  console.log(movieId)
  // Use the movieId to fetch the movie details
  axios
    .get(`http://www.omdbapi.com?apikey=${process.env.API_KEY}&i=${movieId}`)
    .then((response) => {
      console.log(response.data)
      // Process the movie details as needed
    })
    .catch((err) => {
      console.log(err)
    })
}

// Export the movieSelected function if necessary
