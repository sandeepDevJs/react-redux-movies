import React, { Component } from "react";
import Movie from "./Movie";
import { Loader, Dimmer } from "semantic-ui-react";
import { connect } from "react-redux";
import { getMoviesAction } from "../../actions/movieActions";
import LowerBox from "./lowerBox";
import Modal from "../Modal";

class Index extends Component {
	componentDidMount() {
		this.props.getMoviesAction();
	}

	render() {
		return (
			<>
				{this.props.moviesState && (
					<Dimmer
						active={
							this.props.moviesState.loading ||
							this.props.upcomingState.loading ||
							this.props.getVideo.loading
						}
					>
						<Loader indeterminate>Preparing...</Loader>
					</Dimmer>
				)}
				<div className="ui container">
					{this.props.moviesState.movies && (
						<div className="ui centered grid">
							<div className="ui stackable four column grid">
								{this.props.moviesState.movies.results.map((mdt) => (
									<Movie key={mdt.id} data={mdt} />
								))}
							</div>
						</div>
					)}

					{this.props.moviesState.error && <Modal errorModal />}
				</div>
				<LowerBox />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		moviesState: state.moviesState,
		upcomingState: state.upcomingState,
		getVideo: state.getVideo,
	};
};

export default connect(mapStateToProps, { getMoviesAction })(Index);
