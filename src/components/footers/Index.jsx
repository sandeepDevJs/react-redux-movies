import React from "react";

const Index = () => {
	return (
		<footer>
			<div className="ui container">
				<div className="ui centered grid">
					<div className="center aligned column row">
						<a
							className="ui medium header"
							href="/"
							style={{ fontFamily: "sans-serif", color: "white" }}
						>
							Home
						</a>
					</div>
					<hr />
					<div className="center aligned two column row">
						<a
							className="ui medium header"
							href="/"
							style={{ fontFamily: "sans-serif", color: "white" }}
						>
							About Us
						</a>
					</div>
					<hr />
					<div className="center aligned two column row">
						<div className="ui segment">
							<div className="ui two column very relaxed grid">
								<div className="column">
									<a
										className="ui medium header"
										href="/"
										// style={{ fontFamily: "sans-serif", color: "white" }}
									>
										<i className="fab fa-github"></i>
									</a>
								</div>
								<div className="column">
									<a
										className="ui medium header"
										href="/"
										// style={{ fontFamily: "sans-serif", color: "white" }}
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
