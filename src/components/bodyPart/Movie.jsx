import React from "react";
const IMG_API = "http://image.tmdb.org/t/p/w185";

const Movie = ({ data }) => {
	return (
		<div className="column">
			<div
				className="ui card"
				style={{
					"box-shadow":
						"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
				}}
			>
				<div className="ui medium rounded slide masked reveal image">
					<img
						src={IMG_API + data.poster_path}
						className="visible content rounded image"
						alt=""
					/>
					<div className="hidden content" style={{ padding: "1rem" }}>
						{data.overview}
					</div>
				</div>
				<div
					className="content"
					style={{ backgroundColor: "#b34180", color: "white" }}
				>
					<div className="rating-circle">{data.vote_average}</div>
					<h3
						className="header"
						style={{
							"font-family": "Cabin",
							color: "white",
						}}
					>
						{data.title ? data.title : data.original_name}
					</h3>
					<span
						className="date"
						style={{
							"font-family": "Cabin",
						}}
					>
						{data.release_date ? data.release_date : data.first_air_date}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Movie;
