import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitialFirebase from "../firebase/InitialFirebase.js";

InitialFirebase();
const auth = getAuth();
const provider = new GoogleAuthProvider();

const UseFirebase = () => {
	// internal variable
	const [user, setUser] = useState({});
	const [error, setError] = useState({});

	console.log(user);
	// google login
	const googleLogin = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				setUser(result.user);
				console.log(result);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	// onauth state change
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setError("");
		});
		return unsubscribe;
	}, []);

	// Logout
	const logout = () => {
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return { googleLogin, error, user, logout };
};

export default UseFirebase;
