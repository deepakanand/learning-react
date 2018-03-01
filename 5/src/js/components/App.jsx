var React = require('react')
var AppStore = require('../stores/AppStore.js')
var SearchForm = require('./SearchForm.jsx')
var MovieResults = require('./MovieResults.jsx')

function getAppState(){
  return {
    movies: AppStore.getMovieResults()
  }
}

var App = React.createClass({
  getInitialState: function(){
    return getAppState()
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange)
  },

  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange)
  },

  render: function(){
    console.log(this.state.movies)
    var movieResults
    if(this.state.movies == ''){
      movieResults = ''
    } else {
      movieResults = <MovieResults movies={this.state.movies} />
    }

    return(
			<div>
				<SearchForm />
				{movieResults}
			</div>
    )
  },

  _onChange: function(){
    this.setState(getAppState())
  }
})

module.exports = App
