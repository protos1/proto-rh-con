<template>
  <div class="s1-U__pd16">
    <div class="md-layout">
      <template v-for="application in applications">
        <div
          class="md-layout-item"
          :class="mdSizeClasses || 'md-size-50'"
          v-if="application.Id !== 'app-cockpit-top'"
          :key="application.Id"
        >
          <md-button
            class="s1-U__height-auto s1-U__pd--bt16 s1-U__full-width md-button-content--full-width"
            @click="redirectTo(application.Url)"
          >
            <div
              class="s1-U__full-height s1-U__full-width s1-U__mg--bt4 s1-U__pd16"
            >
              <img :src="application.IconUri" alt />
            </div>
            <h6 class="s1-U__text-ellipsis">{{ application.Name }}</h6>
          </md-button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Applications from "../../mocks/applications";

export default {
  name: "AllApps",
  props: {
    mdSizeClasses: String
  },
  data: () => ({
    applications: Applications
  }),
  methods: {
    redirectTo(url) {
      setTimeout(() => {
        window.open(url, "_blank");
      }, 600);
    }
  }
};
</script>
