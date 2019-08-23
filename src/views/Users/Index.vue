<template>
  <div class="s1-loc__container m s1-loc__relative">
    <div
      class="s1-U__align-children--center table-loading"
      :class="{ active: tableLoading }"
    >
      <md-progress-spinner
        class="md-accent s1-U__mg--bt4"
        :md-stroke="2"
        :md-diameter="24"
        md-mode="indeterminate"
      ></md-progress-spinner>
      <p class="md-body-2 s1-U__text-color--dark-2 s1-U__mg--lt16">
        Carregando
      </p>
    </div>
    <header>
      <h1 class="md-display-1">Usuários</h1>
    </header>

    <section
      class="s1-U__align-children--center s1-U__justify-content--flex-end s1-U__mg--tp32"
      v-show="Users.length > 0 || Filtered"
    >
      <md-button
        class="s1-md-bordered md-primary s1-U__mg--rt8"
        id="import-button"
        @click="importUserDialog = true"
      >
        <div class="s1-U__align-children--center s1-U__pd--rt8">
          <md-icon class="s1-U__mg--rt4">file_upload</md-icon>
          <span>importar</span>
        </div>
      </md-button>
      <md-button class="md-raised md-primary" @click="to('users/new')">
        <div class="s1-U__align-children--center s1-U__pd--rt8">
          <md-icon class="s1-U__mg--rt4">add</md-icon>
          <span>usuário</span>
        </div>
      </md-button>
    </section>

    <section
      class="s1-U__mg--tp32 s1-U__align-children--center s1-U__justify-content--space-between s1-U__flex-wrap"
      v-show="Users.length > 0 || Filtered"
    >
      <div>
        <div class="s1-U__align-children--center s1-U__pd--bt16">
          <div
            class="s1-loc__md-field-wrapper s1-U__mg--rt8 s1-U__width--240px"
          >
            <md-field class="s1-U__mg0">
              <md-input
                class="s1-U__full-width"
                v-model="Form.Search"
                placeholder="Buscar usuário"
              />
              <md-button
                type="submit"
                class="s1-U__mg0 md-icon-button md-dense squared"
                style=" margin-top: -2px; margin-right: 2px;"
                @click="userFilter()"
                :disabled="tableLoading"
              >
                <md-icon>search</md-icon>
              </md-button>
            </md-field>
          </div>
        </div>
        <div
          class="s1-U__align-children--center s1-U__pd--bt16"
          v-show="Filtered && Form.Search"
        >
          <div class="md-body-2">
            Mostrando resultados para "{{ Form.Search }}"
          </div>
          <md-button class="md-mini s1-U__mg--lt16" @click="cleanFilter()">
            <md-icon class="s1-U__mg--rt4">
              <span style="font-size: 18px">close</span>
            </md-icon>
            <span>
              <small>limpar</small>
            </span>
          </md-button>
        </div>
      </div>
      <div v-show="thereAreMoreThanOneStatus()">
        <md-checkbox
          class="md-primary s1-loc__check s1-U__mg--rt32"
          v-model="Status"
          :value="true"
          >Ativos</md-checkbox
        >
        <md-checkbox
          class="md-primary s1-loc__check"
          v-model="Status"
          :value="false"
          >Inativos</md-checkbox
        >
      </div>
    </section>

    <section class="s1-loc__relative">
      <div
        class="md-layout s1-U__flex-column md-alignment-center-center s1-U__pd--tp64 s1-U__pd--bt32"
        v-if="Users.length < 1"
      >
        <md-icon class="md-size-5x">
          <span class="s1-U__text-color--dark-3">person</span>
        </md-icon>
        <p class="md-subheading s1-U__text-color--dark-2 s1-U__mg--bt32">
          Nenhum usuário encontrado
        </p>
        <div class="s1-U__align-children--center s1-U__justify-content--center">
          <md-button
            class="s1-md-bordered md-primary s1-U__mg--rt8"
            @click="importUserDialog = true"
          >
            <div
              class="s1-U__align-children--center s1-U__pd--rt24 s1-U__pd--lt16"
            >
              <md-icon class="s1-U__mg--rt4">file_upload</md-icon>
              <span>importar</span>
            </div>
          </md-button>
          <md-button class="md-raised md-primary" @click="to('users/new')">
            <div
              class="s1-U__align-children--center s1-U__pd--rt24 s1-U__pd--lt16"
            >
              <md-icon class="s1-U__mg--rt4">add</md-icon>
              <span>usuário</span>
            </div>
          </md-button>
        </div>
      </div>
      <md-table
        v-else
        v-model="Users"
        :md-sort.sync="currentSort"
        :md-sort-order.sync="currentSortOrder"
        :md-sort-fn="customSort"
        md-card
      >
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="First Name" md-sort-by="FirstName">
            {{ item.FirstName }}
          </md-table-cell>

          <md-table-cell md-label="Last Name" md-sort-by="LastName">
            {{ item.LastName }}
          </md-table-cell>

          <md-table-cell md-label="User Name" md-sort-by="UserName">
            <div
              class="s1-U__align-children--center s1-U__justify-content--space-between"
            >
              <p class="s1-U__pd--rt16">{{ item.UserName }}</p>
              <div>
                <md-icon>{{ item.Active ? "check" : "block" }}</md-icon>
                <md-tooltip md-direction="left">
                  {{ item.Active ? "Ativo" : "Inativo" }}
                </md-tooltip>
              </div>
            </div>
          </md-table-cell>

          <md-table-cell md-label="Email" md-sort-by="Email">
            {{ item.Email }}
          </md-table-cell>

          <md-table-cell md-label="" md-sort-by="" md-numeric>
            <md-menu md-direction="bottom-end">
              <md-button md-menu-trigger class="md-icon-button md-mini">
                <md-icon>more_vert</md-icon>
              </md-button>
              <md-menu-content>
                <md-menu-item @click="to(`/users/edit/${item.Id}`)"
                  >Editar</md-menu-item
                >
                <md-menu-item @click="toogleActive(item.Id)">{{
                  item.Active ? "Desativar" : "Ativar"
                }}</md-menu-item>
                <md-menu-item disable>
                  <span class="s1-U__text-color--dark-3">Excluir</span>
                </md-menu-item>
              </md-menu-content>
            </md-menu>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </section>

    <md-dialog :md-active.sync="importUserDialog">
      <header
        class="s1-U__pd24 s1-U__pd--rt16 s1-U__align-children--center s1-U__justify-content--space-between"
      >
        <h2 class="md-title">Importar usuários</h2>
        <md-button
          class="md-icon-button md-mini"
          @click="importUserDialog = false"
        >
          <md-icon>close</md-icon>
        </md-button>
      </header>

      <div class="s1-U__pd--lt24 s1-U__pd--rt24">
        <p class="s1-U__pd--bt8">
          Selecione um arquivo .CSV válido.
        </p>
        <md-field>
          <label>Arquivo .CSV</label>
          <md-file v-model="file" />
        </md-field>
      </div>

      <div class="s1-U__text-align--right s1-U__pd24 s1-U__pd--tp16">
        <div>
          <md-button
            class="md-raised md-primary"
            @click="importUsers(ImportedUsers)"
            :disabled="!file"
          >
            <div
              class="s1-U__align-children--center s1-U__pd--rt24 s1-U__pd--lt16"
            >
              <md-icon class="s1-U__mg--rt4">file_upload</md-icon>
              <span>importar</span>
            </div>
          </md-button>
        </div>
        <div class="s1-U__mg--tp16">
          <md-button class="s1-md-bordered md-primary">
            <div
              class="s1-U__align-children--center s1-U__pd--rt24 s1-U__pd--lt16"
            >
              <md-icon class="s1-U__mg--rt4">get_app</md-icon>
              <span style="text-transform: none"
                >Download do arquivo padrão</span
              >
            </div>
          </md-button>
        </div>
      </div>
    </md-dialog>
  </div>
</template>

<script>
import _ from "lodash";
import router from "@/router";
import { ImportedUsers } from "../../mocks/user";
import * as u from "../../assets/utils/index";

export default {
  name: "UserList",
  data: () => ({
    Users: [],
    currentSort: "FirstName",
    currentSortOrder: "desc",
    Form: {
      Search: null
    },
    Fields: [],
    tableLoading: false,
    Filtered: false,
    importUserDialog: false,
    file: null,
    ImportedUsers,
    Status: [true, false]
  }),
  beforeMount() {
    this.Fields = Object.keys(this.$store.state.models.user).filter(
      item => item !== "Id" && item !== "Photo"
    );
  },
  methods: {
    setUsers(users) {
      if (users.length > 0) {
        this.Users = this.customSort(users);
      } else {
        this.Users = [];
      }
    },
    importUsers() {
      this.$store.dispatch("turnOnGeneralLoading");
      this.importUserDialog = false;

      setTimeout(() => {
        this.$store.dispatch("importUsers", _.cloneDeep(this.ImportedUsers));
        this.setUsers(_.cloneDeep(this.$store.state.users));
      }, 2000);

      setTimeout(() => {
        this.$store.dispatch("turnOffGeneralLoading");
      }, 2200);

      setTimeout(() => {
        this.$store.dispatch("showSnackbar", {
          text: `${this.ImportedUsers.length} usuários importados com sucesso`
        });
        this.to("/users");
      }, 2200);
    },
    toogleActive(id) {
      const user = u.getObjByProp(this.$store.state.users, id, "Id");

      this.$store.dispatch("turnOnGeneralLoading");

      setTimeout(() => {
        this.$store.dispatch("toogleActive", id);
      }, 500);

      setTimeout(() => {
        this.$store.dispatch("turnOffGeneralLoading");
        this.userFilter();
      }, 600);

      setTimeout(() => {
        this.$store.dispatch("showSnackbar", {
          text: `${user.FirstName} agora está ${
            user.Active ? "Inativo" : "Ativo"
          }.`
        });
      }, 700);
    },
    to(r) {
      router.push(r);
    },
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort;

        if (this.currentSortOrder === "desc") {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });
    },
    findUsers(text) {
      return _.cloneDeep(this.$store.state.users).filter(user => {
        for (let i = 0; i < this.Fields.length; i++) {
          if (
            user[this.Fields[i]] &&
            this.Fields[i] !== "Active" &&
            user[this.Fields[i]].includes(text)
          )
            return user;
        }
      });
    },
    findUsersByStatus(status) {
      if (status.length === 0) {
        this.Filtered = true;
        return [];
      }

      if (status.length === 2) {
        if (this.Form.Search) {
          return _.cloneDeep(this.Users).filter(user => {
            this.Filtered = true;
            return user.Active === status[0] || user.Active === status[1];
          });
        } else {
          return _.cloneDeep(this.$store.state.users).filter(user => {
            return user.Active === status[0] || user.Active === status[1];
          });
        }
      }

      if (this.Form.Search) {
        return _.cloneDeep(this.Users).filter(user => {
          this.Filtered = true;
          return user.Active === status[0];
        });
      } else {
        return _.cloneDeep(this.$store.state.users).filter(user => {
          this.Filtered = true;
          return user.Active === status[0];
        });
      }
    },
    userFilter() {
      this.tableLoading = true;

      if (!this.Form.Search) {
        this.cleanFilter();
        return;
      }

      setTimeout(() => {
        this.setUsers(this.findUsers(this.Form.Search));
        this.Filtered = true;
        this.tableLoading = false;
      }, 500);
    },
    cleanFilter() {
      this.tableLoading = true;

      setTimeout(() => {
        this.setUsers(_.cloneDeep(this.$store.state.users));
        this.Filtered = false;
        this.tableLoading = false;
        this.Form.Search = null;
      }, 500);
    },
    changeStatus(status) {
      this.setUsers(this.findUsersByStatus(status));
    },
    thereAreMoreThanOneStatus() {
      let ret = false;
      let status;
      const Users = this.$store.state.users;
      for (let i = 0; i < Users.length; i++) {
        if (i === 0) status = Users[i].Active;
        if (i > 0 && Users[i].Active !== status) {
          ret = true;
          break;
        }
      }
      return ret;
    }
  },
  mounted() {
    this.setUsers(_.cloneDeep(this.$store.state.users));
  },
  watch: {
    Status: function() {
      this.changeStatus(this.Status);
    }
  }
};
</script>

<style lang="scss">
.table-loading {
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;

  transition: z-index 0ms linear 200ms, opacity 200ms ease-in-out 0ms;
  z-index: -1;
  opacity: 0;

  &.active {
    transition: z-index 0ms linear 0ms, opacity 200ms ease-in-out 10ms;
    z-index: 99;
    opacity: 1;
  }
}
</style>
