import React from 'react'
import {render} from 'react-dom'

var HelloReact = React.createClass({
	render: function() {
		return (
			<div> Hello React!! </div>
		)
	}
})

var Profiles = React.createClass({
	getInitialState: function() {
		return {
			profiles : [
				{id: 1, name: 'John', profession: 'UX specialist'},
				{id: 2, name: 'Jane', profession: 'Developer'}
			]
		}
	},

	render: function () {

		return (
			<section> 
				{this.state.profiles.map(function(profile){			
					return <div	key={profile.id}>
					<h3>{profile.name}</h3>
					<p>{profile.profession}</p>
					</div>
				})}
			</section>
		)

	}
})


var App = React.createClass ({
	render: function(){
		return (
			<Profiles />
		)
	}
})

render(<App />, document.getElementById('app'))