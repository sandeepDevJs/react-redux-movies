import React from "react";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import { getMoviesAction } from "../../actions/movieActions";

const Index = (props) => {
	const ref = React.createRef();

	const searchMovie = (e) => {
		e.preventDefault();
		let keyword = ref.current.value;
		props.getMoviesAction(keyword);
	};

	return (
		<div className="mainDiv">
			<div className="ui container">
				<div className="ui padded grid">
					<div className="row">
						<div className="column"></div>
					</div>
					<div className="sixteen wide column">
						<p>
							<span
								className="ui huge header"
								style={{
									fontFamily: "Cabin",
									color: "white",
								}}
							>
								Welcome.
							</span>
							<br />
							<span
								className="ui large header"
								style={{
									fontFamily: "Cabin",
									color: "white",
								}}
							>
								Millions of movies, TV shows and people to discover. Explore
								now.
							</span>
						</p>
					</div>
					<div className="sixteen wide column">
						<form onSubmit={(e) => searchMovie(e)}>
							<div className="ui fluid icon input">
								<input type="text" ref={ref} placeholder="Search Movies..." />
								<Button type="submit">
									<i className="search icon"></i>
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default connect(null, { getMoviesAction })(Index);
