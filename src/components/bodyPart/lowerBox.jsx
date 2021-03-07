import React from "react";
import { connect } from "react-redux";
import { signInWithGoogle } from "../../shared/firebase";
import { getUpcomingsAction } from "../../actions/movieActions";
import Trailer from "./Trailer";
import Modal from "../Modal";
import { AuthContext } from "../../contexts/authContext";

class lowerBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	componentDidMount() {
		this.props.getUpcomingsAction();
	}

	changeModal = (bool) => {
		this.setState({ open: bool });
	};

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
						Upcomings
					</h1>

					<div className="trailer-container">
						{this.props.upcomingState.movies
							? this.props.upcomingState.movies.map((item) => (
									<Trailer
										key={item.id}
										data={item}
										changeModal={this.changeModal}
									/>
							  ))
							: ""}
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
					{
						<AuthContext.Consumer>
							{(value) =>
								!value.displayName && (
									<button
										className="ui primary button"
										onClick={signInWithGoogle}
									>
										Sign Up
									</button>
								)
							}
						</AuthContext.Consumer>
					}
				</div>
				<Modal open={this.state.open} modalFun={this.changeModal} />
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
