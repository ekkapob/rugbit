var posts = [
	{
		title: "This is the heading",
		tags: ["programming", "design", ".NET"],
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...",
		createdDate: "Jan 5, 2015",
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
		createdDate: "Jan 5, 2015",
		budget: "5,000",
		dollar: "THB",
		jobtype: "design",
		author: {
			name: "homerman",
			avatar: "avatar-bart.jpg"
		}
	},
	{
		title: "This is the heading",
		tags: ["programming", "design", ".NET"],
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...",
		createdDate: "Jan 5, 2015",
		budget: "5,000",
		dollar: "THB",
		jobtype: "design",
		author: {
			name: "homerman",
			avatar: "avatar-bart.jpg"
		}
	},
	{
		title: "This is the heading",
		tags: ["programming", "design", ".NET"],
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...",
		createdDate: "Jan 5, 2015",
		budget: "5,000",
		dollar: "THB",
		jobtype: "design",
		author: {
			name: "homerman",
			avatar: "avatar-bart.jpg"
		}
	},
	{
		title: "This is the heading",
		tags: ["programming", "design", ".NET"],
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...",
		createdDate: "Jan 5, 2015",
		budget: "5,000",
		dollar: "THB",
		jobtype: "design",
		author: {
			name: "homerman",
			avatar: "avatar-bart.jpg"
		}
	},
	{
		title: "This is the heading",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...",
		createdDate: "Jan 5, 2015",
		budget: "5,000",
		dollar: "THB",
		jobtype: "design",
		author: {
			name: "homerman",
			avatar: "avatar-bart.jpg"
		}
	}
];

var PostImg = React.createClass({
	render: function(){
		var postCommentIcon = "post-comment-icon icon-" + this.props.post.jobtype;
		var authorImage = "images/avatar/" + this.props.post.author.avatar;
		return (
			<div className="media-left post-img-container">
				<div className="media-left post-img-container">
					<div className="post-bubble" title={this.props.post.jobtype}>
						<div className="icon-speech shadow"></div>	
						<div className="icon-speech">
							<div className={postCommentIcon}></div>
						</div>
					</div>
					<img className="img-circle" 
						src={authorImage} 
						alt="something" 
						title={this.props.post.author.name} />
				</div>
			</div>
		);
	}
});

var PostTag = React.createClass({
	render: function(){
		return (
			<button className="btn btn-xs post-tag">{this.props.tagName}</button>
		);
	}
});

var PostTagContainer = React.createClass({
	render: function(){

		var tags = [];

		if(!this.props.tags){
			return false;
		}


		this.props.tags.forEach(function(tagName){
			tags.push(<PostTag tagName={tagName} />);
		});

		return (
			<div class="post-tag-container">
				{tags}
			</div>
		);
	}
});

var PostBody = React.createClass({
	render: function(){
		return (
			<div className="media-body">
				<h3 className="media-heading">
					<a className="post-title" href="#">{this.props.post.title}</a>
					<span className="post-author-container">
						<span> by </span>
						<span className="post-author">
							<a href="#">{this.props.post.author.name}</a>
						</span>
					</span>
					<span className="post-date">{this.props.post.createdDate}</span>
					<div className="post-pay">{this.props.post.budget} {this.props.post.dollar} {(this.props.post.budget ? <span className="icon-stack"></span> : false)}</div>
				</h3>
				<PostTagContainer tags={this.props.post.tags} />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...
				</p>
			</div>
		);
	}
});

var Post = React.createClass({
	render: function(){
		return (
			<div className="media post">
				<PostImg post={this.props.post}/>
				<PostBody post={this.props.post}/>
			</div>
		);
	}
});


var Posts = React.createClass({
	render: function(){
		var posts = [];
		this.props.posts.forEach(function(post){

			posts.push(<Post post={post}/>);
			posts.push(<hr />);

		}.bind(this));

		return (
			<div>{posts}</div>
		);
	}
});

React.render(<Posts posts={posts}/>, document.getElementById('home-post-container'));
