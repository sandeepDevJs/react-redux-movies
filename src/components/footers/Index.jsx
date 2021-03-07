import React from "react";
import { NavLink } from "react-router-dom";

const Index = () => {
	return (
		<footer>
			<div className="ui container">
				<div className="ui centered grid">
					<div className="center aligned column row">
						<NavLink
							to="/"
							className="ui medium header"
							style={{ fontFamily: "sans-serif", color: "white" }}
						>
							Home
						</NavLink>
					</div>
					<hr />
					<div className="center aligned two column row">
						<NavLink
							to="/"
							className="ui medium header"
							style={{ fontFamily: "sans-serif", color: "white" }}
						>
							About Us
						</NavLink>
					</div>
					<hr />
					<div className="center aligned two column row">
						<div className="ui segment">
							<div className="ui two column very relaxed grid">
								<div className="column">
									<a
										className="ui medium header"
										href="https://github.com/sandeepDevJs"
										style={{ fontFamily: "sans-serif" }}
										rel="noreferrer"
										target="_blank"
									>
										<i className="fab fa-github"></i>
									</a>
								</div>
								<div className="column">
									<a
										className="ui medium header"
										href="https://www.linkedin.com/in/sandeepdevjs/"
										rel="noreferrer"
										target="_blank"
										style={{ fontFamily: "sans-serif" }}
									>
										<i className="fab fa-linkedin"></i>
									</a>
								</div>
							</div>
							<div className="ui vertical divider"></div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Index;
