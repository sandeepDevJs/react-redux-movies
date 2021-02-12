import React from "react";

const Movie = ({ src }) => {
	return (
		<div className="column custom-img-style">
			<div className="ui card">
				<div className="ui medium rounded slide masked reveal image">
					<img src={src} className="visible content" alt="" />
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

Movie.defaultProps = {
	src:
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgGLG2-4G_xxydDz2jcuyEJlqLtKQgL1CJA&amp;usqp=CAU",
};

export default Movie;
