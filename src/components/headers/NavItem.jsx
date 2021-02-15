import React from "react";

const NavItem = ({ children, href }) => {
	return (
		<a href={href} className="item" style={{ color: "white" }}>
			{children}
		</a>
	);
};

NavItem.defaultProps = {
	href: "/",
};

export default NavItem;
