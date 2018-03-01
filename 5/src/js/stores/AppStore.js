var AppDispatcher = require('../dispatcher/AppDispatcher')
var AppConstants = require('../constants/AppConstants')
var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')
var AppAPI = require('../utils/appAPI.js')

var CHANGE_EVENT = 'change'

var _movies = []

var AppStore = assign({}, EventEmitter.prototype, {
  setMovieResults: function(movies){
    _movies = movies
  },
  getMovieResults: function(){
    return _movies
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT)
  },
  addChangeListener: function(callback){
    this.on('change', callback)
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback)
  }
})

AppDispatcher.register(function(payload){
  var action = payload.action

  switch(action.actionType){
  case AppConstants.SEARCH_MOVIES:
    console.log('Searching for movie '+ action.movie.title)
      // NOTE: searchMovies is an async call and emit following this
      // does not mean the results are ready
      // All it means is that anyone else interested in what movie was searched for
      // can update themselves.
      // The result is handled by a different action in the success callback
      //
      //
      // From https://stackoverflow.com/a/26637579:
      // You can call for data in either the action creators or the stores.
      // The important thing is to not handle the response directly, but
      // to create an action in the error/success callback.
      // Handling the response directly in the store leads to a more brittle design
    AppAPI.searchMovies(action.movie)
    AppStore.emit(CHANGE_EVENT)
    break
  case AppConstants.RECEIVE_MOVIE_RESULTS:
    AppStore.setMovieResults(action.movies)
    AppStore.emit(CHANGE_EVENT)
    break
  }

  return true
})

module.exports = AppStore
