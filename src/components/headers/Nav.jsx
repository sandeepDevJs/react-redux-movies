import React from "react";
import NavItem from "./NavItem";

const Nav = () => {
	return (
		<div className="ui container">
			<div className="ui secondary menu">
				<NavItem>Home</NavItem>
				<NavItem>About</NavItem>
			</div>
		</div>
	);
};

export default Nav;
