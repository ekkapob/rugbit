var posts = [
	{
		title: "This is the heading",
		tags: ["programming", "design", ".NET"],
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...",
		date: "Jan 5, 2015",
		budget: "50,000",
		dollar: "THB",
		jobtype: "coding",
		author: {
			name: "homerman",
			avatar: "avatar-bart.jpg"
		}
	},
	{
		title: "This is the heading",
		tags: ["programming", "design", ".NET"],
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...",
		date: "Jan 5, 2015",
		budget: "50,000",
		dollar: "THB",
		jobtype: "coding",
		author: {
			name: "homerman",
			avatar: "avatar-bart.jpg"
		}
	}
];

var PostImg = React.createClass({
	render: function(){
		return (
			<div>IMG</div>
		);
	}
});

var PostBody = React.createClass({
	render: function(){
		return (
			<div>BODY</div>
		);
	}
});

var Post = React.createClass({
	render: function(){
		return (
			<div className="media post">
				<PostImg />
				<PostBody />
			</div>
		);
	}
});


var Posts = React.createClass({
	render: function(){
		var posts = [];
		this.props.posts.forEach(function(post){

			posts.push(<Post />);

		}.bind(this));

		return (
			<div>{posts}</div>
		);
	}
});

React.render(<Posts posts={posts}/>, document.getElementById('home-post-container'));