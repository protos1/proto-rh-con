<template>
  <div id="app">
    <transition name="fade">
      <div
        class="s1-loc__general-loading"
        v-show="$store.state.view.generalLoading"
      >
        <md-progress-spinner
          class="md-accent"
          :md-stroke="2"
          :md-diameter="96"
          md-mode="indeterminate"
        ></md-progress-spinner>
      </div>
    </transition>

    <my-account-panel v-if="currentUser" :currentUser="currentUser" />

    <md-app class="s1-md-app">
      <md-app-drawer
        class="md-xsmall-hide md-small-hide"
        :md-active.sync="menuVisible"
        md-persistent="mini"
      >
        <div class="s1-logo__wrapper">
          <img
            v-show="!menuVisible"
            class="s1-logo__img"
            src="./assets/imgs/s1.svg"
            alt="company logo"
          />
          <img
            v-show="menuVisible"
            class="s1-logo__img"
            src="./assets/imgs/s1.svg"
            alt="company logo"
          />
        </div>

        <md-list :md-expand-single="true">
          <md-list-item @click="toggleMenu">
            <md-icon v-if="!menuVisible">menu</md-icon>
            <md-icon v-if="menuVisible">keyboard_arrow_left</md-icon>
            <span class="md-list-item-text">Esconder</span>
            <md-tooltip md-direction="right" v-show="!menuVisible"
              >Expandir menu</md-tooltip
            >
          </md-list-item>

          <md-list-item @click="to('/')">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Página inicial</span>
            <md-tooltip md-direction="right" v-show="!menuVisible"
              >Página inicial</md-tooltip
            >
          </md-list-item>

          <md-list-item @click="to('/users')">
            <md-icon>person</md-icon>
            <span class="md-list-item-text">Usuários</span>
            <md-tooltip md-direction="right" v-show="!menuVisible"
              >Usuários</md-tooltip
            >
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="s1-U__bg-color--body-bg s1-loc__relative">
        <div style="z-index: 2; position: relative">
          <router-view />
        </div>
      </md-app-content>
    </md-app>
    <md-snackbar
      md-position="left"
      :md-duration="snackbarDuration"
      :md-active.sync="$store.state.view.showSnackbar"
      md-persistent
    >
      <p>
        {{ $store.state.view.snackbarText }}
      </p>
      <md-button class="md-primary flex-shrink-0" @click="clSnack()"
        >Fechar</md-button
      >
    </md-snackbar>
  </div>
</template>

<script>
import MyAccountPanel from "./components/MyAccountPanel/index";
import router from "@/router";

export default {
  name: "App",
  components: {
    MyAccountPanel
  },
  data: () => ({
    currentUser: null,
    menuVisible: false,
    snackbarDuration: 4000
  }),
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    to(r) {
      router.push(r);
    },
    clSnack() {
      this.$store.dispatch("hideSnackbar");
    }
  },
  mounted() {
    this.currentUser = this.$store.state.currentUser;
  }
};
</script>
