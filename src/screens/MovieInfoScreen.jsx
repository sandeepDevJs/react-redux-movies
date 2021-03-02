import React from "react";
import { connect } from "react-redux";
import Movie from "../components/bodyPart/Movie";
import { getMovieByIdAction } from "../actions/movieActions";

const IMG_API = "http://image.tmdb.org/t/p/w185";

class MovieInfoScreen extends React.Component {
	componentDidMount() {
		let movieId = this.props.match.params.mid;
		this.props.getMovieByIdAction(movieId);
	}

	render() {
		return (
			<div
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), #5c4978), url("${IMG_API}/${this.props.videoInfo.movies.backdrop_path}")`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
				className="movie-info-container"
			>
				<div className="ui container">
					<Movie isOnInfoPage data={this.props.videoInfo.movies} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		videoInfo: state.getMovieById,
	};
};

export default connect(mapStateToProps, { getMovieByIdAction })(
	MovieInfoScreen
);
