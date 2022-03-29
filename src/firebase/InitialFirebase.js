import firebaseConfig from "./Firebse.config.js";
import { initializeApp } from "firebase/app";

const InitialFirebase = () => {
	initializeApp(firebaseConfig);
};
export default InitialFirebase;
