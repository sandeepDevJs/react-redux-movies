import React from "react";

const Container = ({ children, history }) => {
	return <div history={history}>{children}</div>;
};

export default Container;
