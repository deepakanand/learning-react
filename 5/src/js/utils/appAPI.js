var AppServerActions = require('../actions/AppServerActions.js')

module.exports = {
  searchMovies: function(movie) {

    fetch('http://www.omdbapi.com/?apikey=9035e80&s=' + movie.title)
      .then(res => res.json())
      .then(data => {
        AppServerActions.receiveMovieResults(data.Search)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
