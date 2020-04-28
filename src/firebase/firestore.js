import firebase from "@/firebaseConfig";

const profiles = firebase.firestore().collection("profiles");

const profileExists = uid => {
  return profiles
    .doc(uid)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return { exists: false };
      }

      return { exists: true, profile: doc.data() };
    })
    .catch();
};

const addProfile = (uid, data) => {
  return profiles
    .doc(uid)
    .set(data)
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
};

const usernameExists = username => {
  return profiles
    .where("username", "==", username)
    .get()
    .then(querySnapshot => {
      return !querySnapshot.empty;
    })
    .catch();
};

export default { addProfile, profileExists, usernameExists };
