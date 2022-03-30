import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	updateProfile,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import InitialFirebase from "../firebase/InitialFirebase.js";

InitialFirebase();
const auth = getAuth();
const provider = new GoogleAuthProvider();

const UseFirebase = () => {
	// internal variable
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	// google login
	const googleLogin = () => {
		signInWithPopup(auth, provider)
			.then((result) => {})
			.catch((error) => {
				setError(error.message);
			});
	};

	// user register
	const registerUser = (data) => {
		setLoading(true);
		const { email, password, dislayName } = data;
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const newUser = { email, displayName: dislayName };
				setUser(newUser);
				updateProfile(auth.currentUser, {
					displayName: dislayName,
				})
					.then(() => {
						// save user call
						// saveUser(email, dislayName, "POST");
					})
					.catch((error) => {
						setError(error.message);
					});
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	// user login
	const login = (data) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				// const path = location?.state?.from || "/";
				// history.replace(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
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

	return { googleLogin, error, user, logout, registerUser, login, loading };
};

export default UseFirebase;
