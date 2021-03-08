import React from "react";
import NavItem from "./NavItem";
import { AuthContext } from "../../contexts/authContext";
import { signInWithGoogle, logOut } from "../../shared/firebase";

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
				<NavItem href="#about">About</NavItem>
				<div className="right menu">
					<AuthContext.Consumer>
						{(value) =>
							value &&
							(value.displayName ? (
								<NavItem onClick={logOut}>{value.displayName}</NavItem>
							) : (
								<NavItem onClick={signInWithGoogle}>SignUp/login</NavItem>
							))
						}
					</AuthContext.Consumer>
				</div>
			</div>
		</div>
	);
};

export default Nav;
