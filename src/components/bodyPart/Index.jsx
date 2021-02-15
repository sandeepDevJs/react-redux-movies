import React, { Component } from "react";
import Movie from "./Movie";
import { connect } from "react-redux";
import { getMoviesAction } from "../../actions/movieActions";

class Index extends Component {
	componentDidMount() {
		this.props.getMoviesAction();
	}

	render() {
		console.log(this.props.moviesState);
		if (this.props.moviesState.movies) {
			return (
				<div className="ui container">
					<div className="ui padded grid">
						<div className="ui stackable four column grid centerOnMb">
							{this.props.moviesState.movies.results.map((mdt) => (
								<Movie key={mdt.id} data={mdt} />
							))}
						</div>
					</div>
				</div>
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
