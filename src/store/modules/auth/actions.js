import auth from "@/firebase/auth";
import firestore from "@/firebase/firestore";
import firebase from "@/firebaseConfig";

const actions = {
  register({ commit }, payload) {
    return auth
      .registerUser(payload)
      .then(res => {
        if (!res.isValid) {
          return res;
        }

        commit("setAuth", {
          uid: res.uid,
          username: "",
          displayImage: "",
          aboutMe: ""
        });
        return { isValid: true };
      })
      .catch(e => {
        return { isValid: false, error: e };
      });
  },
  async registerWithGoogle({ commit }) {
    const res = await auth.registerWithGoogle();
    if (!res.isValid) {
      return res;
    }

    const profile = await firestore.profileExists(res.uid);
    if (!profile.exists) {
      commit("setAuth", {
        uid: res.uid,
        username: "",
        displayImage: "",
        aboutMe: ""
      });
      return { isValid: true, exists: false };
    }

    commit("setAuth", { ...profile.profile, uid: res.uid });
    return { isValid: true, exists: true };
  },
  async login({ commit }, { email, password }) {
    const res = await auth.login(email, password);
    if (!res.isValid) {
      return res;
    }

    const profile = await firestore.profileExists(res.uid);
    if (!profile.exists) {
      commit("setAuth", {
        uid: res.uid,
        username: "",
        displayImage: "",
        aboutMe: ""
      });
      return { isValid: true, exists: false };
    }

    commit("setAuth", { ...profile.profile, uid: res.uid });
    return { isValid: true, exists: true };
  },
  logout({ commit }) {
    return auth.logout().then(() => {
      commit("logout");
      return true;
    });
  },
  createProfile({ commit }, { uid, profile }) {
    return firestore.addProfile(uid, profile).then(res => {
      if (!res) {
        return false;
      }

      commit("setUser", profile);
      return true;
    });
  },
  async authState({ commit }) {
    return firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        const profile = await firestore.profileExists(user.uid);
        if (!profile.exists) {
          commit("setAuth", {
            uid: user.uid,
            username: "",
            displayImage: "",
            aboutMe: ""
          });
          return { isValid: true, exists: false };
        }
        commit("setAuth", { ...profile.profile, uid: user.uid });
        return { isValid: true, exists: true };
      } else {
        return { isValid: false };
      }
    });
  }
};

export default actions;
