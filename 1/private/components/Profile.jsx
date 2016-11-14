import React from 'react'

var Profile = React.createClass({

    render: function(){

        let hobbies = this.props.hobbies.map(function(hobby){
            return (
                <li>{hobby}</li>
            )
        })

        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.profession}</p>
                <ul>{hobbies}</ul>
            </div>
        )
    }
})
export default Profile
