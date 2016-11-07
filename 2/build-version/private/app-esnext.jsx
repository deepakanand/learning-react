import React from 'react';
import ReactDOM from 'react-dom';


class Layout extends React.Component{

	// TODO: Add ES2017 support
	// static propTypes = { children:  React.PropTypes.element.isRequired}

	render () {
		return <div className="overlay">
                    <div className="box">
                        <h2>{this.props.title}</h2>
                        {this.props.children}
                    </div>
                    <footer>By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</footer>
                </div>
	}
}

Layout.propTypes = { children:  React.PropTypes.element.isRequired}


class Email extends React.Component{
	render() {
		return <input type="email" name="email" data-info="An active email account is needed to gain access." placeholder="Your email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required title="You need to have a working email to gain access." required="required" maxLength="255" id="email"/>
	}
}

class Password extends React.Component{

	constructor(){
		super();
		this.state = {
			password1: '',
			password2: ''
		}
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})

	}

	render(){
		var children = []
		children[0] = <input type="password" name="password1" required="required"
		placeholder="Password" key="password"onChange = {this.onChange.bind(this)}/>

		if(this.props.twice){
			children[1] = <input type="password" name="password2" required="required"
			placeholder="Repeat Password" key="password2" onChange = {this.onChange.bind(this)}/>
		}
		var msg = "";
		if(this.state.password2.length && this.state.password1 !== this.state.password2){
			msg = <div className = 'error-message'>Passwords must match</div>
		}

		return <div>{children}{msg}</div>
	}
}

class LoginForm extends React.Component{

	onChange(e) {

	}

	render() {
		return <form method="post" acceptCharset="utf-8" action="/u/login">
            <Email />
            <Password />
            <label htmlFor="remember-me">
            <input type="checkbox" name="remember_me" value="1" defaultChecked
            id="remember-me" />Remember me
            </label>
            <p>
                <a href="register.html" className="inlink">Register</a> | <a href="#request-reset-password" className="inlink">Reset Password</a>
            </p>
            <button type="submit">Login</button>
        </form>
	}
}


class RegisterForm extends React.Component {
	render() {
		return <form method="post" acceptCharset="utf-8" action="/u/register">
                 <Email/>
                 <Password twice/>
                  <span className="col-p100 info"></span>
                  <button type="submit">Submit</button>
                </form>
	}
}


ReactDOM.render(
	<Layout title = "Register">
		<RegisterForm />
	</Layout>
	, document.getElementById('app'))
