import firebase from "firebase/app";
import "firebase/auth";
import dotenv from "dotenv";

dotenv.config();

var firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const auth = app.auth();

export const signInWithGoogle = () => {
	auth
		.signInWithPopup(googleProvider)
		.then((res) => {
			console.log(res.user);
		})
		.catch((err) => {
			console.log(err.message);
		});
};

export const logOut = () => {
	auth
		.signOut()
		.then(() => {
			console.log("Logged Out!!");
		})
		.catch((err) => {
			console.log(err);
		});
};

export default app;
