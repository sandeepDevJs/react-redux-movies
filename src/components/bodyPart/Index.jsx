import React from "react";
import Movie from "./Movie";

const Index = () => {
	return (
		<div className="ui padded grid">
			<div className="ui stackable four column grid">
				<Movie />
				<Movie />
				<Movie />
				<Movie src="https://2l7g9kgsh281akevs49v281d-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Spider-Man-Far-From-Home-Trailer-e1561734444434-1132x670.jpg" />
			</div>
		</div>
	);
};

export default Index;
