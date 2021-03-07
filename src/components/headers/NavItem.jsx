import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ children, href, ...rest }) => {
	return (
		<NavLink to={href} {...rest} className="item" style={{ color: "white" }}>
			{children}
		</NavLink>
	);
};

NavItem.defaultProps = {
	href: "/",
};

export default NavItem;
