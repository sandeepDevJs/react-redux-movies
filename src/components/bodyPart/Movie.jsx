import React from "react";
const IMG_API = "http://image.tmdb.org/t/p/w185";

const Movie = ({ data }) => {
	return (
		<div className="column custom-img-style">
			<div className="ui card">
				<div className="ui medium rounded slide masked reveal image">
					<img
						src={IMG_API + data.poster_path}
						className="visible content"
						alt=""
					/>
					<div className="hidden content">Hello</div>
				</div>
				<div className="content">
					<h3 className="header">Team Fu &amp; Hess</h3>
					<span className="date">Created in Sep 2014</span>
				</div>
			</div>
		</div>
	);
};

export default Movie;
