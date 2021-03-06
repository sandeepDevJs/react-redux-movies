import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ children, href }) => {
	return (
		<NavLink to={href} className="item" style={{ color: "white" }}>
			{children}
		</NavLink>
	);
};

NavItem.defaultProps = {
	href: "/",
};

export default NavItem;
