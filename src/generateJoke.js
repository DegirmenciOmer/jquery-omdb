import axios from 'axios'
import $ from 'jquery'

function generateJoke() {
  console.log(process.env.API_KEY)
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    $('#joke').html(res.data.joke)
  })
}

export default generateJoke
