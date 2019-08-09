import config from './config';
import app from 'firebase/app';
import 'firebase/auth';

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    createNewUser = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    logInWithEmailAndPassword = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }

    resetPassword = (email) => {
        this.auth.sendPasswordResetEmail(email);
    }

    upDatePassword = (password) => {
        this.auth.currentUser.updatePassword(password);
    }

    logUserOut = () => {
        this.auth.signOut();
    }
}

export default Firebase;