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
        Criação de usuário
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
          @click="create()"
          :disabled="$v.Form.$invalid"
        >
          <div class="s1-U__align-children--center">
            <span>Criar</span>
          </div>
        </md-button>
      </div>
    </md-card>

    <md-dialog-confirm
      :md-active.sync="abortConfirm"
      md-title="Abortar criação de usuário?"
      md-content="Os dados preenchidos serão perdidos permanentemente"
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
    create() {
      this.$store.dispatch("turnOnGeneralLoading");

      setTimeout(() => {
        this.$store.dispatch("createUser", _.cloneDeep(this.Form));
      }, 1000);

      setTimeout(() => {
        this.$store.dispatch("turnOffGeneralLoading");
      }, 1500);

      setTimeout(() => {
        this.$store.dispatch("showSnackbar", {
          text: `Usuário ${this.Form.FirstName} cadastrado com sucesso`
        });
        this.to("/users");
      }, 1600);
    },
    abort() {
      this.back();
    },
    to(r) {
      router.push(r);
    },
    back() {
      router.go(-1);
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
    this.setForm(this.$store.state.models.user);
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
