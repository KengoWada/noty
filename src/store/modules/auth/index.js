import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  isLoggedIn: false,
  user: {
    uid: null,
    username: null,
    displayImage: null,
    aboutMe: null
  }
};

export default {
  state,
  actions,
  getters,
  mutations
};
