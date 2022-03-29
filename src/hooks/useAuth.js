import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const UseAuth = () => {
	const auth = useContext(AuthContext);
	return auth;
};

export default UseAuth;
