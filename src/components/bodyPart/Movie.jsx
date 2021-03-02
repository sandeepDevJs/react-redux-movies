import React from "react";

import { Link } from "react-router-dom";

const IMG_API = "http://image.tmdb.org/t/p/w185";

const Movie = ({ data, isOnInfoPage }) => {
	return (
		<div className="column">
			<Link to={`movieInfo/${data.id}`}>
				<div
					className="ui card"
					style={{
						boxShadow:
							"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
					}}
				>
					<div className="ui medium rounded slide masked reveal image">
						<img
							src={
								data.poster_path
									? IMG_API + data.poster_path
									: `https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/film.png`
							}
							className="visible content rounded image"
							alt=""
							style={{
								maxHeight: "400px",
							}}
						/>
						<div className="hidden content" style={{ padding: "1rem" }}>
							{data.overview}
						</div>
					</div>
					{isOnInfoPage === false && (
						<div
							className="content"
							style={{ backgroundColor: "#b34180", color: "white" }}
						>
							<div className="rating-circle">{data.vote_average}</div>
							<h3
								className="header"
								style={{
									fontFamily: "Cabin",
									color: "white",
								}}
							>
								{data.title ? data.title : data.original_name}
							</h3>
							<span
								className="date"
								style={{
									fontFamily: "Cabin",
								}}
							>
								{data.release_date ? data.release_date : data.first_air_date}
							</span>
						</div>
					)}
				</div>
			</Link>
		</div>
	);
};

export default Movie;
