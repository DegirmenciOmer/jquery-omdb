import $ from 'jquery'
import generateJoke from './generateJoke.js'
import './styles/main.scss'

const laughing = 'https://thispersondoesnotexist.com/'

$(function () {
  $('#laughImg').attr('src', laughing)

  $('#jokeBtn').on('click', generateJoke)

  generateJoke()
})
