import firebaseConfig from "./firebse.config";
import { initializeApp } from "firebase/app";

const InitialFirebase = () => {
	initializeApp(firebaseConfig);
};
export default InitialFirebase;
