import React, { createContext } from "react";
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
	const allValue = "hello";

	return (
		<AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
