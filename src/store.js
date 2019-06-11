import Vue from "vue";
import Vuex from "vuex";
// import router from "@/router";
// import _ from "lodash";
import models from "./mocks/models";
import { all as users } from "./mocks/user";
import currentUser from "./mocks/user";
import * as u from "./assets/utils/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    models,
    users,
    currentUser,
    view: {
      generalLoading: false,
      showSnackbar: false
    }
  },
  mutations: {
    //VIEW
    setGeneralLoading(state, payload) {
      state.view.generalLoading = payload;
    },
    setSnackbar(state, payload) {
      state.view.showSnackbar = payload;
    },
    //USERS
    createUser(state, payload) {
      state.users = [payload, ...state.users];
    },
    editUser(state, payload) {
      state.users = state.users.map(user => {
        return user.Id === payload.Id ? { ...user, ...payload } : user;
      });
    }
  },
  actions: {
    //VIEW
    turnOnGeneralLoading({ commit }) {
      commit("setGeneralLoading", true);
    },
    turnOffGeneralLoading({ commit }) {
      commit("setGeneralLoading", false);
    },
    showSnackbar({ commit }) {
      commit("setSnackbar", true);
    },
    hideSnackbar({ commit }) {
      commit("setSnackbar", false);
    },
    //USERS
    createUser({ commit }, userObj) {
      const user = { Id: u.randomString(64, "Aa#"), ...userObj };
      commit("createUser", user);
    },
    editUser({ commit }, user) {
      commit("editUser", user);
    }
  }
});
