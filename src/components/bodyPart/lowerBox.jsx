import React from "react";
import { connect } from "react-redux";
import { getUpcomingsAction } from "../../actions/movieActions";
import Trailer from "./Trailer";

class lowerBox extends React.Component {
	componentDidMount() {
		this.props.getUpcomingsAction();
	}

	render() {
		return (
			<div className="lowerBox">
				<div className="ui container">
					<h1
						className="ui huge header"
						style={{
							fontFamily: "Cabin",
							color: "white",
						}}
					>
						Latest Trailers
					</h1>

					<div className="trailer-container">
						{/* {this.props.upcomingState.movies
							? this.props.upcomingState.movies.map((item) => <Trailer />)
							: ""} */}
					</div>
					<h1
						className="ui huge header"
						style={{
							fontFamily: "Cabin",
							color: "white",
						}}
					>
						Join Today.
					</h1>

					<p
						style={{
							fontFamily: "Cabin",
							color: "white",
							fontSize: "20px",
						}}
					>
						Get access to maintain your own custom personal lists, track what
						you've seen and search and filter for what to watch next—regardless
						if it's in theatres, on TV or available on popular streaming
						services like Netflix, Amazon Prime Video, Jio Cinema, and Viu.
					</p>
					<button className="ui primary button">Sign Up</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		upcomingState: state.upcomingState,
	};
};

export default connect(mapStateToProps, { getUpcomingsAction })(lowerBox);
