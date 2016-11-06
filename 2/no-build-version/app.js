// Hello World 1
// var h1 = React.createElement('h1', {className: 'success'}, 'Hello World');
// ReactDOM.render(h1, document.getElementById('app'));
// 
// Hello World 2
// ReactDOM.render(<h1 className = 'success'> Hello world </h1>,  document.getElementById('app'))

var Layout = React.createClass({

	propTypes:{
        children: React.PropTypes.element.isRequired
    },
	render:function(){
        return <div className="overlay">
                    <div className="box">
                        <h2>{this.props.title}</h2>
                        {this.props.children}
                    </div>
                    <footer>By signing up, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</footer>
                </div>
    }
})

var Badge = React.createClass({
	render: function(){
		return <h3>Deepak</h3>
	} 
})

var Email = React.createClass({
	render: function(){
		return <input type="email" name="email" data-info="An active email account is needed to gain access." placeholder="Your email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required title="You need to have a working email to gain access." required="required" maxlength="255" id="email"/>
	}
})

var Password = React.createClass({

	getInitialState: function(){
		return {
			password1: '',
			password2: ''
		}
	},

	onChange: function(e){
		this.setState({
			[e.target.name]: e.target.value
		})

	},

	render: function(){
		var children = []
		children[0] = <input type="password" name="password1" required="required" 
		placeholder="Password" key="password"onChange = {this.onChange}/>
		
		if(this.props.twice){
			children[1] = <input type="password" name="password2" required="required" 
			placeholder="Repeat Password" key="password2" onChange = {this.onChange}/>
		}
		var msg = "";
		if(this.state.password2.length && this.state.password1 !== this.state.password2){
			msg = <div className = 'error-message'>Passwords must match</div>
		}

		return <div>{children}{msg}</div>
	}
})

var LoginForm = React.createClass({

	onChange: function(e){

	},
	render: function(){
		return <form method="post" accept-charset="utf-8" action="/u/login">
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
})


var RegisterForm = React.createClass({
	render: function(){
		return <form method="post" accept-charset="utf-8" action="/u/register">
                 <Email/>
                 <Password twice/>
                  <span class="col-p100 info"></span>
                  <button type="submit">Submit</button>    
                </form>    
	}
})


ReactDOM.render(
	<Layout title = "Register">
		<RegisterForm />
	</Layout>
	, document.getElementById('app'))