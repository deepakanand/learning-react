import React from 'react'
import {render} from 'react-dom'

import Profile from './components/Profile.jsx'

var Profiles = React.createClass({
	getInitialState: function() {
		return {
			profiles : [
				{id: 1, name: 'John', profession: 'UX specialist', hobbies: ['painting', 'travelling']},
				{id: 2, name: 'Jane', profession: 'Developer', hobbies: ['problem-solving', 'stamps']}
			]
		}
	},

	render: function () {

		return (
			<div>
                {this.state.profiles.map(function(profile){
                    return (<Profile
                        name = {profile.name}
                        profession = {profile.profession}
                        hobbies = {profile.hobbies}
                        key = {profile.id}
                        />
                    )
                })}
            </div>
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
