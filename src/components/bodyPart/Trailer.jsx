import React from "react";
import { connect } from "react-redux";
import { getVideoById } from "../../actions/movieActions";

const IMG_API = "http://image.tmdb.org/t/p/w185";

class Trailer extends React.Component {
	openTrailer = () => {
		this.props.changeModal(true);
		this.props.getVideoById(this.props.data.id);
	};

	render() {
		return (
			<div
				className="ui centered video"
				style={{
					backgroundImage: `url(${IMG_API}/${this.props.data.poster_path})`,
					cursor: "pointer",
				}}
				onClick={() => this.openTrailer()}
			>
				<i className="fas fa-play"></i>
			</div>
		);
	}
}

export default connect(null, { getVideoById })(Trailer);
