
var Account = React.createClass({
	render: function(){
		return (
			<div className="loggedin-container">
					<div className="account-name">
						<div className="greeting">Good Morning!</div>
						<div>Methew JFM. Foxiemajor</div>
					</div>
					<img className="avatar img-circle" src="images/avatar/avatar-bart.jpg" />
					<div style={{display: 'none'}}></div>
				</div>
		);
	}
});

var LoginContainer = React.createClass({
	render: function(){
		return (
			<div className="login-signup-container">
				<a id="login-btn" href="#">Log in</a>
				<span className="login-separator">|</span>
				<button id="signup-btn" type="button" className="btn btn-default btn-sm">
					Sign Up
				</button>
			</div>
		);
	}
});

var Links = React.createClass({
	render: function(){
		return (
			<ul className="nav navbar-nav">
				<li className="nav-menu-selected">
					<a href="#">TRENDS</a>
				</li>
				<li>
					<a href="#">ARTICLES</a>
				</li>
				<li>
					<a href="#">JOBS</a>
				</li>
				<li>
					<a href="#">OFFICES</a>
				</li>
				<li>
					<a href="#">NETWORK</a>
				</li>
			</ul>
		);
	}
});
var FooterNav = React.createClass({
	render: function(){
		return (
			<div>
				<div className="navbar-header">
					<a className="navbar-brand">RUGBIT</a>
				</div>
				<Links />
			</div>
		);
	}
});

var Nav = React.createClass({
	render: function(){
		return (
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand">RUGBIT</a>
				</div>
				<Links />
				<div className="top-right">
					<Account />
				</div>
			</div>
		);
	}
});

var navs = document.getElementsByTagName('nav')
React.render(<Nav/>, navs[0]);
React.render(<FooterNav/>, navs[1]);
