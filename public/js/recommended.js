var jobs = [
	{
		title: "Need rubyist!",
		tags: ["programming", "design", "code", "transport"],
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
		postDate: "Jan 5, 2015",
		percentMatched: 7,
		author: {
			name: "Peter",
			avatar: "avatar-bart.jpg"
		}
	},
	{
		title: "Need rubyist!",
		tags: ["programming", "design", "code", "transport"],
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
		postDate: "Jan 5, 2015",
		percentMatched: 100,
		author: {
			name: "Peter",
			avatar: "homer.jpg"
		}
	},
	{
		title: "Need rubyist!",
		tags: ["programming", "design", "code", "transport"],
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
		postDate: "Jan 5, 2015",
		percentMatched: 37,
		author: {
			name: "Peter",
			avatar: "avatar-bart.jpg"
		}
	},
	{
		title: "Need rubyist!",
		tags: ["programming", "design", "code", "transport"],
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et",
		postDate: "Jan 5, 2015",
		percentMatched: 80,
		author: {
			name: "Peter",
			avatar: "avatar-bart.jpg"
		}
	}
];

var Job = React.createClass({
	render: function(){
		var tags = this.props.job.tags ? <div className="tags">{this.props.job.tags.join(", ")}</div> : '';
		var avartar = "images/avatar/" + this.props.job.author.avatar;
		var matchedLevel = (this.props.job.percentMatched >= 80)? 'important' : '';

		return (
			<div className="matched-job media">
				<div className="media-body">
					<h5 className="media-heading">{this.props.job.title}</h5>
					{tags}
					<p className="job-description">{this.props.job.description}</p>
					<div className="post-date">{this.props.job.postDate}</div>
				</div>
				<div className="media-right post-image-container" href="#">
					<div className="matched-percent-bubble">
						<div className="icon-speech shadow"></div>
						<div className={"icon-speech " + matchedLevel}></div>
						<div className="percent-match">{this.props.job.percentMatched}%</div>
					</div>
					<img className="author-img avatar img-circle" src={avartar} />
				</div>
			</div>
		);
	}
});

var Jobs = React.createClass({
	render: function(){
		var jobs = [];
		
		if (this.props.jobs){
			this.props.jobs.forEach(function(job){
				jobs.push(<Job job={job} />);
				//jobs.push(<hr />);
			}.bind(this));
		}

		return (
			<div className="matched-job-container">
				{jobs}
			</div>
		);
	}
});

// <h4 className="title">Top Jobs Matched</h4>

var RecommendedJobs = React.createClass({
	render: function(){
		return (
			<div id="recommended-job">
				
				<Jobs jobs={this.props.jobs}/>
			</div>
		);
	}
});


React.render(<RecommendedJobs jobs={jobs}/>, document.getElementById('right-container'));
