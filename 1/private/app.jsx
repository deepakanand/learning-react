import React from 'react'
import {render} from 'react-dom'

import {Profile, Profiles} from './components/Profile.jsx'
import AddProfile from './components/AddProfile.jsx'

class App extends React.Component {

    constructor(props) {

        super(props)

        this.state =  {
            profiles : []
        }

        this.addUser = this.addUser.bind(this)
    }

    // data-fetching type operations
    componentDidMount() {

        fetch('http://localhost:3000/profiles')
        .then(res => res.json())
        .then(data => {
            this.setState({
                profiles: data
            })
        })
        .catch(err => {
            console.log(err)
        })

    }

    addUser(newUser) {
        this.setState({
            profiles: this.state.profiles.concat([newUser])
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
