<template>
  <div class="s1-loc__container m">
    <header>
      <h1 class="md-display-1">Usuários</h1>
    </header>

    <section
      class="s1-U__align-children--center s1-U__justify-content--flex-end s1-U__mg--tp32"
      v-show="Users.length > 0 || Filtered"
    >
      <md-button
        class="s1-md-bordered md-primary s1-U__mg--rt8"
        @click="to('users')"
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
      class="s1-U__align-children--center s1-U__justify-content--space-between s1-U__flex-wrap s1-U__mg--tp32"
      v-show="Users.length > 0 || Filtered"
    >
      <div class="s1-U__align-children--center s1-U__pd--bt16">
        <div class="s1-loc__md-field-wrapper s1-U__mg--rt8 s1-U__width--240px">
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
        <md-progress-spinner
          class="md-accent s1-U__mg--bt4"
          :md-stroke="2"
          :md-diameter="24"
          v-show="tableLoading"
          md-mode="indeterminate"
        ></md-progress-spinner>
      </div>
      <div
        class="s1-U__align-children--center s1-U__justify-content--flex-end s1-U__pd--bt16 s1-U__pd--lt16"
        v-show="Filtered"
      >
        <div class="md-body-2">Resultados para "{{ Form.Search }}"</div>
        <md-button class="md-mini s1-U__mg--lt16" @click="cleanFilter()">
          <md-icon class="s1-U__mg--rt4">
            <span style="font-size: 18px">close</span>
          </md-icon>
          <span>
            <small>limpar</small>
          </span>
        </md-button>
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
            @click="to('users')"
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
          <md-table-cell md-label="First Name" md-sort-by="FirstName">{{
            item.FirstName
          }}</md-table-cell>
          <md-table-cell md-label="Last Name" md-sort-by="LastName">{{
            item.LastName
          }}</md-table-cell>
          <md-table-cell md-label="User Name" md-sort-by="UserName">{{
            item.UserName
          }}</md-table-cell>
          <md-table-cell md-label="Email" md-sort-by="Email">{{
            item.Email
          }}</md-table-cell>
          <md-table-cell md-label="" md-sort-by="" md-numeric>
            <md-button
              class="md-icon-button md-mini"
              @click="to(`/users/edit/${item.Id}`)"
            >
              <md-icon>edit</md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </section>
  </div>
</template>

<script>
import _ from "lodash";
import router from "@/router";

export default {
  name: "UserList",
  data: () => ({
    Users: [],
    currentSort: "FirstName",
    currentSortOrder: "asc",
    Form: {
      Search: null
    },
    Fields: [],
    tableLoading: false,
    Filtered: false
  }),
  methods: {
    setUsers(users) {
      if (users.length > 0) {
        this.Users = users;
        this.Fields = Object.keys(users[0]).filter(
          item => item !== "Id" && item !== "Photo"
        );
      }
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
          if (user[this.Fields[i]].includes(text)) return user;
        }
      });
    },
    userFilter() {
      this.tableLoading = true;

      if (!this.Form.Search) {
        this.cleanFilter();
        return;
      }

      setTimeout(() => {
        this.Users = this.findUsers(this.Form.Search);
        this.Filtered = true;
        this.tableLoading = false;
      }, 1000);
    },
    cleanFilter() {
      this.tableLoading = true;

      setTimeout(() => {
        this.Users = _.cloneDeep(this.$store.state.users);
        this.Filtered = false;
        this.tableLoading = false;
        this.Form.Search = null;
      }, 1000);
    }
  },
  mounted() {
    this.setUsers(_.cloneDeep(this.$store.state.users));
  }
};
</script>
