import React from "react";

const NavItem = ({ children, href }) => {
	return (
		<a href={href} className="item">
			{children}
		</a>
	);
};

NavItem.defaultProps = {
	href: "/",
};

export default NavItem;
