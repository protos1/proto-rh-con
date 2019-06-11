<template>
  <div class="s1-loc__container m">
    <header>
      <h1 class="md-display-1">Criação de usuário</h1>
    </header>

    <md-card class="s1-U__mg--tp32 s1-U__width--540px">
      <div class="s1-U__pd24">
        <div class="s1-loc__md-field-wrapper s1-U__width--160px">
          <md-field>
            <label>Nome</label>
            <md-input v-model="Form.FirstName" required />
          </md-field>
        </div>
      </div>

      <div class="s1-U__pd24 s1-U__text-align--right">
        <md-button class="md-raised md-primary" @click="create()">
          <div class="s1-U__align-children--center s1-U__pd--rt8">
            <md-icon class="s1-U__mg--rt4">add</md-icon>
            <span>Salvar</span>
          </div>
        </md-button>
      </div>
    </md-card>
  </div>
</template>

<script>
import _ from "lodash";
import router from "@/router";

export default {
  name: "NewUser",
  data: () => ({
    Form: {
      FirstName: ""
    }
  }),
  methods: {
    create() {
      this.$store.dispatch("createUser", _.cloneDeep(this.Form));
      this.to("/users");
    },
    to(r) {
      router.push(r);
    }
  }
};
</script>
