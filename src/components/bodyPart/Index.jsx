import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { getMoviesAction } from "../../actions/movieActions";
import LowerBox from "./lowerBox";

class Index extends Component {
	componentDidMount() {
		this.props.getMoviesAction();
	}

	render() {
		if (this.props.moviesState.movies) {
			return (
				<>
					<div className="ui container">
						<div className="ui padded centered grid">
							<div className="ui stackable four column grid">
								{this.props.moviesState.movies.results.map((mdt) => (
									<Movie key={mdt.id} data={mdt} />
								))}
							</div>
						</div>
					</div>
					<LowerBox />
				</>
			);
		}

		if (this.props.moviesState.loading) {
			return <h1>Loading..</h1>;
		}

		return <h1>Loading..</h1>;
	}
}

const mapStateToProps = (state) => {
	return { moviesState: state.moviesState };
};

export default connect(mapStateToProps, { getMoviesAction })(Index);
