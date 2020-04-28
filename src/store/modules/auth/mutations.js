const mutations = {
  setAuth(state, { uid, username, displayImage, aboutMe }) {
    state.isLoggedIn = true;
    state.user.uid = uid;
    state.user.username = username;
    state.user.displayImage = displayImage;
    state.user.aboutMe = aboutMe;
  },
  logout(state) {
    state.isLoggedIn = false;
    state.user.uid = null;
    state.user.username = null;
    state.user.displayImage = null;
    state.user.aboutMe = null;
  },
  setUser(state, { username, displayImage, aboutMe }) {
    state.user.username = username;
    state.user.displayImage = displayImage;
    state.user.aboutMe = aboutMe;
  }
};

export default mutations;
