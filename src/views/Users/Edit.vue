<template>
  <div class="s1-loc__container m">
    <header class="s1-U__align-children--center">
      <md-button
        class="md-icon-button md-mini s1-U__mg--rt8"
        @click="abortConfirm = true"
      >
        <md-icon>arrow_back</md-icon>
      </md-button>
      <h1 class="md-display-1" @click="Form.UserName = 'renan'">
        Edição de usuário
      </h1>
    </header>

    <md-card class="s1-U__mg--tp16 s1-U__width--540px">
      <user-form
        :Form="Form"
        :$v="$v"
        :updateValue="updateValue"
        :simpletext="simpletext"
      />

      <div class="s1-U__pd24 s1-U__text-align--right">
        <md-button
          class="md-raised md-primary"
          @click="edit()"
          :disabled="$v.Form.$invalid"
        >
          <div class="s1-U__align-children--center">
            <span>Salvar</span>
          </div>
        </md-button>
      </div>
    </md-card>

    <md-dialog-confirm
      :md-active.sync="abortConfirm"
      md-title="Abortar edição de usuário?"
      md-content="Os dados alterados serão perdidos permanentemente"
      md-confirm-text="Sair"
      md-cancel-text="Ficar"
      @md-cancel="abortConfirm = false"
      @md-confirm="abort()"
    />
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

import _ from "lodash";
import router from "@/router";
import UserForm from "./Form";
import * as u from "../../assets/utils/index";

export default {
  name: "NewUser",
  components: {
    UserForm
  },
  data: () => ({
    Form: {},
    abortConfirm: false
  }),
  methods: {
    edit() {
      this.$store.dispatch("turnOnGeneralLoading");

      setTimeout(() => {
        this.$store.dispatch("editUser", _.cloneDeep(this.Form));
      }, 1000);

      setTimeout(() => {
        this.$store.dispatch("turnOffGeneralLoading");
      }, 1500);

      setTimeout(() => {
        this.$store.dispatch("showSnackbar", {
          text: `Usuário ${this.Form.FirstName} editado com sucesso.`
        });
        this.to("/users");
      }, 1600);
    },
    abort() {
      this.to("/users");
    },
    to(r) {
      router.push(r);
    },
    updateValue(model, value) {
      this.Form[model] = value;
      this.$forceUpdate();
    },
    setForm(obj) {
      this.Form = { ...obj };
    },
    simpletext(text) {
      return text
        .toLowerCase()
        .replace(/[|&;$%@"<>()+,\s]/g, "")
        .replace(/[áàâã]/g, "a")
        .replace(/[éèê]/g, "e")
        .replace(/[íï]/g, "i")
        .replace(/[óôõö]/g, "o")
        .replace(/[ú]/g, "u")
        .replace(/[ç]/g, "c")
        .replace(/[ñ]/g, "n");
    }
  },
  mounted() {
    if (!this.$route.params.id) this.to("/users");

    const user = u.getObjByProp(
      this.$store.state.users,
      this.$route.params.id,
      "Id"
    );

    if (!user) this.to("/users");

    this.setForm(user);
  },
  validations: {
    Form: {
      UserName: {
        required,
        minLength: minLength(4)
      },
      FirstName: {
        required,
        minLength: minLength(4)
      },
      LastName: {
        required,
        minLength: minLength(4)
      },
      Email: {
        required,
        email
      },
      DocumentType: {
        required
      },
      DocumentNumber: {
        required
      },
      Matricula: {
        required
      },
      Password: {
        required
      }
    }
  },
  computed: {
    firstNameWasChanged() {
      return this.Form.FirstName;
    },
    lastNameWasChanged() {
      return this.Form.LastName;
    }
  },
  watch: {
    firstNameWasChanged: function(newValue) {
      this.Form.FullUserName = this.Form.Name = `${newValue} ${
        this.Form.LastName
      }`;
    },
    lastNameWasChanged: function(newValue) {
      this.Form.FullUserName = this.Form.Name = `${
        this.Form.FirstName
      } ${newValue}`;
    }
  }
};
</script>
