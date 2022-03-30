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

	// google login=========================
	const googleLogin = (location, navigate) => {
		signInWithPopup(auth, provider)
			.then((result) => {
				const path = location?.state?.from || "/";
				navigate(path);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	// user register==========================
	const registerUser = (data, location, navigate) => {
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
						const path = location?.state?.from || "/";
						navigate(path);
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

	// user login===========================
	const login = (data, location, navigate) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				const path = location?.state?.from || "/";
				navigate(path);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setLoading(false));
	};

	// onauth state change===================================
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

	// Logout===============================
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
