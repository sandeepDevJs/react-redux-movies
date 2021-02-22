import React from "react";
const IMG_API = "http://image.tmdb.org/t/p/w185";

const Trailer = () => {
	return (
		<div
			className="ui centered video"
			style={{
				backgroundImage: `url(${IMG_API}/vfuzELmhBjBTswXj2Vqxnu5ge4g.jpg)`,
			}}
		>
			<i class="fas fa-play"></i>
		</div>
	);
};

export default Trailer;
