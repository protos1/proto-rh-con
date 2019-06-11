<template>
  <div class="s1-loc__my-account-panel">
    <account-button :person="currentUser" />
    <div class="s1-U__pd8" v-if="false"></div>
    <apps-button v-if="false" />
  </div>
</template>

<script>
import AccountButton from "./AccountButton.vue";
import AppsButton from "./AppsButton.vue";

export default {
  name: "MyAccountPanel",
  props: {
    currentUser: Object
  },
  components: {
    AccountButton,
    AppsButton
  }
};
</script>
