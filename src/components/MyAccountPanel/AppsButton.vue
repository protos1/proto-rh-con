<template>
  <div>
    <md-menu md-size="medium">
      <md-button md-menu-trigger class="md-icon-button">
        <md-icon>apps</md-icon>
        <md-tooltip class="md-xsmall-hide md-small-hide" md-direction="left"
          >Aplicações</md-tooltip
        >
      </md-button>

      <md-menu-content class style="max-height: 64vh; width: 290px;">
        <all-apps />
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
import AllApps from "./../AllApps/index";

export default {
  name: "AccountButton",
  components: {
    AllApps
  }
};
</script>
