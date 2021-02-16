import React from "react";

const lowerBox = () => {
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
					you've seen and search and filter for what to watch next—regardless if
					it's in theatres, on TV or available on popular streaming services
					like Netflix, Amazon Prime Video, Jio Cinema, and Viu.
				</p>

				<button class="ui primary button">Sign Up</button>
			</div>
		</div>
	);
};

export default lowerBox;
