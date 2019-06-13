<template>
  <div class="s1-loc__container m">
    <header>
      <h1 class="md-display-1">Bem-vindo ao Console</h1>
    </header>

    <section class="md-layout md-gutter s1-U__mg--tp32">
      <div class="md-layout-item s1-U__width--180px">
        <md-card
          class="s1-U__full-height s1-U__border-radius--5px-force"
          md-with-hover
        >
          <div
            class="s1-U__pd--tp32 s1-U__pd--bt32 s1-U__pd--lt16 s1-U__pd--rt16 s1-U__text-align--center"
            @click="to('users/new')"
          >
            <div
              class="s1--loc__shortcut-icon s1-U__pd16 s1-U__text-color--primary"
            >
              <div class="s1--loc__shortcut-icon__circle" />
              <md-icon class="md-size-2x md-primary s1-loc__relative">
                <span>person</span>
                <span :style="style">add</span>
              </md-icon>
            </div>
            <p class="md-body-2 s1-U__mg--tp16 s1-U__text-color--primary">
              Cadastrar usuário
            </p>
          </div>
        </md-card>
      </div>
      <div class="md-layout-item s1-U__width--180px">
        <md-card
          class="s1-U__full-height s1-U__border-radius--5px-force"
          md-with-hover
        >
          <div
            class="s1-U__pd--tp32 s1-U__pd--bt32 s1-U__pd--lt16 s1-U__pd--rt16 s1-U__text-align--center"
          >
            <div
              class="s1--loc__shortcut-icon s1-U__pd16 s1-U__text-color--primary"
            >
              <div class="s1--loc__shortcut-icon__circle" />
              <md-icon class="md-size-2x md-primary s1-loc__relative">
                <span>person</span>
                <span :style="style">file_upload</span>
              </md-icon>
            </div>
            <p class="md-body-2 s1-U__mg--tp16 s1-U__text-color--primary">
              Importar usuários
            </p>
          </div>
        </md-card>
      </div>
      <div class="md-layout-item s1-U__width--180px">
        <md-card
          class="s1-U__full-height s1-U__border-radius--5px-force"
          md-with-hover
        >
          <div
            class="s1-U__pd--tp32 s1-U__pd--bt32 s1-U__pd--lt16 s1-U__pd--rt16 s1-U__text-align--center"
          >
            <div
              class="s1--loc__shortcut-icon s1-U__pd16 s1-U__text-color--primary"
            >
              <div class="s1--loc__shortcut-icon__circle" />
              <md-icon class="md-size-2x md-primary s1-loc__relative">
                <span>person</span>
                <span :style="style">block</span>
              </md-icon>
            </div>
            <p class="md-body-2 s1-U__mg--tp16 s1-U__text-color--primary">
              Ativar/Inativar usuário
            </p>
          </div>
        </md-card>
      </div>
    </section>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "home",
  data: () => ({
    style:
      "position: absolute; font-size: 24px; right: -8px; bottom: -8px; background-color: #fff; border-radius: 24px; padding: 4px;"
  }),
  methods: {
    to(r) {
      router.push(r);
    }
  }
};
</script>
