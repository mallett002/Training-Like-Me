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

    logInWithEmailAndPassword = async (email, password) => {
        try {
            await this.auth.signInWithEmailAndPassword(email, password);
            return true;
        } catch {
            return false;
        }
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

    onAuthListener = (next, fallback) => {
        this.auth.onAuthStateChanged(user => {
            if (user) {
                next(user);
            } else {
                fallback();
            }
        });
    }
}

export default Firebase;