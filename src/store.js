import Vue from "vue";
import Vuex from "vuex";
// import router from "@/router";
// import _ from "lodash";
import models from "./mocks/models";
import { all as users } from "./mocks/user";
import { all as products } from "./mocks/product";
import * as u from "./assets/utils/index";
// import randomString from "./assets/utils/randomString";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    models,
    // users,
    products,
    currentUser: users[0],
    view: {
      generalLoading: false,
      showSnackbar: false
    }
  },
  mutations: {
    setProductInProccess(state, payload) {
      state.productInProccess = u.getObjByProp(state.products, payload, "Id");
    },
    setGeneralLoading(state, payload) {
      state.view.generalLoading = payload;
    },
    setUser(state, payload) {
      state.currentUser = { ...state.currentUser, ...payload };
    },
    setSnackbar(state, payload) {
      state.view.showSnackbar = payload;
    }
  },
  actions: {
    turnOnGeneralLoading({ commit }) {
      commit("setGeneralLoading", true);
    },
    turnOffGeneralLoading({ commit }) {
      commit("setGeneralLoading", false);
    },
    setUser({ commit }, userObj) {
      commit("setUser", userObj);
    },
    showSnackbar({ commit }) {
      commit("setSnackbar", true);
    },
    hideSnackbar({ commit }) {
      commit("setSnackbar", false);
    }
  }
});
