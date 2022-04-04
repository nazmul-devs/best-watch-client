import React, { createContext } from "react";
import UseFirebase from "../hooks/UseFirebase";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const allValue = UseFirebase();

	return (
		<AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
