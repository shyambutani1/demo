import React from 'react'

function Home() {
  return (
    <>
      <div className="container" id="container">
		<div className="form-container log-in-container">
			<form action="#">
				<h1>Login</h1>
				<div className="social-container">
					<a href="#" className="social"><i className="fa fa-facebook fa-2x"></i></a>
					<a href="#" className="social"><i className="fab fa fa-twitter fa-2x"></i></a>
				</div>
				<span>or use your account</span>
				<input type="email" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<a href="#">Forgot your password?</a>
				<button>Log In</button>
			</form>
		</div>
		<div className="overlay-container">
			<div className="overlay">
				<div className="overlay-panel overlay-right">
					<h1>HTML CSS Login Form</h1>
					<p>This login form is created using pure HTML and CSS. For social icons, FontAwesome is used.</p>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Home