import React from "react";
import { connect } from "react-redux";
import Movie from "../components/bodyPart/Movie";
import { getMovieByIdAction, getVideoById } from "../actions/movieActions";
import Modal from "../components/Modal";

const IMG_API = "http://image.tmdb.org/t/p/w185";

class MovieInfoScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	componentDidMount() {
		let movieId = this.props.match.params.mid;
		this.props.getMovieByIdAction(movieId);
	}

	changeModal = (bool) => {
		this.setState({ open: bool });
	};

	openTrailer = () => {
		let movieId = this.props.match.params.mid;
		this.props.getVideoById(movieId);
		this.changeModal(true);
	};

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
				<div className="ui centered container">
					<div className="ui stackable padded grid">
						<div className="three column row">
							<div className="column">
								<Movie isOnInfoPage data={this.props.videoInfo.movies} />
							</div>
							<div
								className="ui eight wide column info"
								style={{ color: "#d4e2d4" }}
							>
								<h2 className="ui header" style={{ color: "#d4e2d4" }}>
									{this.props.videoInfo.movies.original_title}
								</h2>
								<p>
									<span>{this.props.videoInfo.movies.release_date}</span>
									{"      "}

									<i className="fas fa-dot-circle"></i>

									{"      "}

									{this.props.videoInfo.movies.genres &&
										this.props.videoInfo.movies.genres.map((genre) => (
											<span key={genre.id}>
												{genre.name}
												{", "}
											</span>
										))}

									{"      "}

									<i className="fas fa-dot-circle"></i>

									{"      "}

									<span className="release-box">
										{this.props.videoInfo.movies.status}
									</span>
								</p>

								<div className="rating-circle" style={{ float: "left" }}>
									{this.props.videoInfo.movies.vote_average}
								</div>
								<button className="play-btn" onClick={() => this.openTrailer()}>
									<i className="fas fa-play"></i>
									Play Trailer
								</button>

								<br />
								<p>
									<i>{this.props.videoInfo.movies.tagline}</i>
								</p>
								<h2 className="ui header" style={{ color: "#d4e2d4" }}>
									Overview
								</h2>

								<p style={{ color: "#d4e2d4", fontSize: "17px" }}>
									{this.props.videoInfo.movies.overview}
								</p>
							</div>
						</div>
					</div>
				</div>
				<Modal open={this.state.open} modalFun={this.changeModal} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		videoInfo: state.getMovieById,
	};
};

export default connect(mapStateToProps, { getMovieByIdAction, getVideoById })(
	MovieInfoScreen
);
