import { createStore } from "framework7/lite";
import LS from "@/common/local-storage/local-storage";

export const USER_STORE_KEY = "__USER_STORE__";

const store = createStore({
  state: {
    user: {},
    settings: {},
    tags: [],
  },
  getters: {
    userInfo({ state }) {
      return state.user;
    },
    setting({ state }) {
      return state.settings;
    },
  },
  actions: {
    setSetting({ state }, settings) {
      state.settings = {
        ...settings,
      };
    },
    setUser({ state }, userInfo) {
      // 持久化存储
      LS.setItem(USER_STORE_KEY, userInfo);
      state.user = {
        ...userInfo,
      };
    },
    logOut({ state }) {
      state.user = {};
    },
  },
});
export default store;
