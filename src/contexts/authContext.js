import React from "react";
import { auth } from "../shared/firebase";

export const AuthContext = React.createContext();

export default class authProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		};
	}

	componentDidMount() {
		auth.onAuthStateChanged(async (user) => {
			this.setState(user);
		});
	}

	render() {
		return (
			<AuthContext.Provider value={this.state}>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}
