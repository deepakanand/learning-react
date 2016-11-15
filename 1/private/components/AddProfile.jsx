import React from 'react'

export default class AddProfile extends React.Component {

    render() {

        return (
            <div>
                 <button onClick = {this.props.handleAddUser}>Add new user </button>
                 <input value = "" />
            </div>
        )

    }
}
