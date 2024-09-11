import { createStore } from "framework7/lite";

const store = createStore({
  state: {
    user: {
      nickname: "",
      avatar: "",
      description: "",
    },
    tags: [],
  },
  getters: {
    userInfo({ state }) {
      return state.user;
    },
  },
  actions: {
    login({ state }, loginInfo) {
      console.log(loginInfo);
    },
    setUser({ state }, userInfo) {
      state.user = {
        ...state.user,
        ...userInfo,
      };
    },
  },
});
export default store;
