var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')


module.exports = {

  receiveMovieResults: function(movies){
    AppDispatcher.handleServerAction({
      actionType: AppConstants.RECEIVE_MOVIE_RESULTS,
      movies: movies
    })
  }
}
