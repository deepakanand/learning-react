import React from 'react'

// This component does not use ES6 class just to demonstrate
// that createClass() and ES6 classes can co-exist
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

class Profiles extends React.Component {

    render() {

        return (
            <div>
                {this.props.profiles.map(function(profile){
                    return (<Profile
                        name = {profile.name}
                        profession = {profile.profession}
                        hobbies = {profile.hobbies}
                        />
                    )
                })}
            </div>
        )

    }
}

export { Profile, Profiles }
