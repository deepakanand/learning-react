import React from 'react'
import {render} from 'react-dom'

import {Profile, Profiles} from './components/Profile.jsx'
import AddProfile from './components/AddProfile.jsx'

class App extends React.Component {

    constructor(props) {

        super(props)

        this.state =  {
            profiles : [
                {id: 1, name: 'John', profession: 'UX specialist', hobbies: ['painting', 'travelling']},
                {id: 2, name: 'Jane', profession: 'Developer', hobbies: ['problem-solving', 'stamps']}
            ]
        }

        this.addUser = this.addUser.bind(this)
    }

    addUser() {
        this.setState({
            profiles: this.state.profiles.concat([{id: 3, name: 'Bob', profession: 'team lead', hobbies: ['leading', 'teaming']}])
        })
    }

	render() {
		return (
            <div>
			<Profiles profiles = {this.state.profiles}/>
            <AddProfile handleAddUser = {this.addUser}/>
            </div>
		)
	}
}

render(<App />, document.getElementById('app'))
