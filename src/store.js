import Vue from "vue";
import Vuex from "vuex";
// import router from "@/router";
// import _ from "lodash";
import models from "./mocks/models";
import { all as users } from "./mocks/user";
import { currentUser } from "./mocks/user.js";
import * as u from "./assets/utils/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    models,
    users,
    currentUser,
    view: {
      generalLoading: false,
      showSnackbar: false,
      snackbarText: ""
    }
  },
  mutations: {
    //VIEW
    setGeneralLoading(state, payload) {
      state.view.generalLoading = payload;
    },
    setSnackbar(state, payload) {
      state.view.showSnackbar = payload.show;
      payload.text ? (state.view.snackbarText = payload.text) : "";
    },
    //USERS
    createUser(state, payload) {
      state.users = [payload, ...state.users];
    },
    importUsers(state, payload) {
      state.users = [...payload, ...state.users];
    },
    editUser(state, payload) {
      state.users = state.users.map(user => {
        return user.Id === payload.Id ? { ...user, ...payload } : user;
      });
    },
    toogleActive(state, id) {
      let userRef = u.getObjByProp(state.users, id, "Id");

      state.users = state.users.map(user => {
        return user.Id === id ? { ...userRef, Active: !userRef.Active } : user;
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
    showSnackbar({ commit }, { text }) {
      commit("setSnackbar", { show: true, text });
    },
    hideSnackbar({ commit }) {
      commit("setSnackbar", false);
    },
    //USERS
    createUser({ commit }, userObj) {
      const user = { Id: u.randomString(12, "Aa#"), ...userObj };
      commit("createUser", user);
    },
    editUser({ commit }, user) {
      commit("editUser", user);
    },
    importUsers({ commit }, users) {
      commit("importUsers", users);
    },
    toogleActive({ commit }, id) {
      commit("toogleActive", id);
    }
  }
});
