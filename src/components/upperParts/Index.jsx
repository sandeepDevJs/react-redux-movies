import React from "react";

const Index = () => {
	return (
		<div className="ui padded grid">
			<div className="row">
				<div className="column"></div>
			</div>
			<div className="sixteen wide column">
				<p>
					<span className="ui huge header">Welcome.</span>
					<br />
					<span className="ui large header">
						Millions of movies, TV shows and people to discover. Explore now.
					</span>
				</p>
			</div>
			<div className="sixteen wide column">
				<div className="ui fluid icon input">
					<input type="text" placeholder="Search Movies..." />
					<i className="search icon"></i>
				</div>
			</div>
		</div>
	);
};

export default Index;
