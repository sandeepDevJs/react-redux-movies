import React from "react";
import NavItem from "./NavItem";

const Nav = () => {
	return (
		<div
			className="ui secondary menu"
			style={{
				backgroundColor: "#5c4978",
				padding: "10px 0",
				marginBottom: "0px",
			}}
		>
			<div className="ui container">
				<NavItem>Home</NavItem>
				<NavItem>About</NavItem>
			</div>
		</div>
	);
};

export default Nav;
