import { auth } from "firebase";
import firebase from "@/firebaseConfig";

const registerUser = ({ email, password }) => {
  return firebase
    .auth()
    .setPersistence(auth.Auth.Persistence.SESSION)
    .then(() => {
      return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          return { isValid: true, uid: res.user.uid };
        })
        .catch(e => {
          return { isValid: false, error: e.message };
        });
    })
    .catch(e => {
      return { isValid: false, error: e.message };
    });
};

const registerWithGoogle = () => {
  return firebase
    .auth()
    .setPersistence(auth.Auth.Persistence.SESSION)
    .then(() => {
      const provider = new auth.GoogleAuthProvider();
      return firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          return {
            isValid: true,
            uid: res.user.uid
          };
        })
        .catch(e => {
          return { isValid: false, error: e.message };
        });
    })
    .catch(e => {
      return { isValid: false, error: e.message };
    });
};

const login = (email, password) => {
  return firebase
    .auth()
    .setPersistence(auth.Auth.Persistence.SESSION)
    .then(() => {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          return { isValid: true, uid: res.user.uid };
        })
        .catch(e => {
          return { isValid: false, error: e.message };
        });
    })
    .catch(e => {
      return { isValid: false, error: e.message };
    });
};

const logout = async () => {
  await firebase.auth().signOut();
  return true;
};

export default { registerUser, registerWithGoogle, login, logout };
