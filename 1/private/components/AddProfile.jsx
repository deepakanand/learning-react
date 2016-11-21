import React from 'react'

export default class AddProfile extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			name: '',
			profession: '',
			hobbies: []
		}

		this.onUserName = this.onUserName.bind(this)
		this.onUserProfession = this.onUserProfession.bind(this)
		this.onUserHobbies = this.onUserHobbies.bind(this)
		this.onAddUser = this.onAddUser.bind(this)
	}

	onAddUser() {
		let newUser = {
			name: this.state.name,
			profession: this.state.profession,
			hobbies: this.state.hobbies.split(',')
		}
		this.props.handleAddUser(newUser)
	}

	onUserName(e) {

		this.setState({
			name: e.target.value
		})

	}

	onUserProfession(e) {

		this.setState({
			profession: e.target.value
		})

	}

	onUserHobbies(e) {

		this.setState({
			hobbies: e.target.value
		})

	}

    render() {

        return (
            <div>
                 <input onChange = {this.onUserName} value = {this.state.name} />
                 <input onChange = {this.onUserProfession} value = {this.state.profession} />
                 <input onChange = {this.onUserHobbies} value = {this.state.hobbies} />
                 <button onClick = {this.onAddUser.bind(this)}>Add new user </button>
            </div>
        )

    }
}
