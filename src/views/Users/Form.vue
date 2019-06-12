<template>
  <form class="s1-U__pd24" v-if="Object.keys(Form).length">
    <div class="s1-U__mg--bt16">
      <h2 class="md-title s1-U__text-color--primary s1-U__mg--bt8">
        Dados pessoais
      </h2>

      <div class="s1-U__align-children--top">
        <text-input
          size="180"
          name="name"
          label="Nome"
          model="FirstName"
          :update="updateValue"
          :form="Form"
          :rules="[
            { name: 'required', text: 'Campo obrigatório' },
            { name: 'minLength', text: 'Mínimo de 4 caracteres' }
          ]"
          :blur="() => $v.Form.FirstName.$touch()"
          :focus="() => $v.Form.FirstName.$reset()"
          :maxlength="20"
          :validationmodel="$v.Form.FirstName"
          required
        />

        <div class="s1-U__pd8 s1-U__flex-shrink-0"></div>

        <text-input
          size="180"
          name="lastname"
          label="Sobrenome"
          model="LastName"
          :update="updateValue"
          :form="Form"
          :rules="[
            { name: 'required', text: 'Campo obrigatório' },
            { name: 'minLength', text: 'Mínimo de 4 caracteres' }
          ]"
          :blur="() => $v.Form.LastName.$touch()"
          :focus="() => $v.Form.LastName.$reset()"
          :maxlength="20"
          :validationmodel="$v.Form.LastName"
          required
        />
      </div>

      <div class="s1-U__mg--tp8">
        <p class="md-body-2 s1-U__text-color--dark-2">Documento</p>
        <div class="s1-U__align-children--top">
          <text-input
            size="100"
            name="doctype"
            label="Tipo"
            model="DocumentType"
            :update="updateValue"
            :form="Form"
            :rules="[{ name: 'required', text: 'Campo obrigatório' }]"
            :blur="() => $v.Form.DocumentType.$touch()"
            :focus="() => $v.Form.DocumentType.$reset()"
            :maxlength="20"
            :validationmodel="$v.Form.DocumentType"
            required
          />

          <div class="s1-U__pd8 s1-U__flex-shrink-0"></div>

          <text-input
            size="180"
            name="docnumber"
            label="Número"
            model="DocumentNumber"
            :update="updateValue"
            :form="Form"
            :rules="[{ name: 'required', text: 'Campo obrigatório' }]"
            :blur="() => $v.Form.DocumentNumber.$touch()"
            :focus="() => $v.Form.DocumentNumber.$reset()"
            :maxlength="20"
            :validationmodel="$v.Form.DocumentNumber"
            required
          />
        </div>
      </div>

      <text-input
        size="210"
        name="matricula"
        label="Matrícula"
        model="Matricula"
        :update="updateValue"
        :form="Form"
        :rules="[{ name: 'required', text: 'Campo obrigatório' }]"
        :blur="() => $v.Form.Matricula.$touch()"
        :focus="() => $v.Form.Matricula.$reset()"
        :maxlength="20"
        :validationmodel="$v.Form.Matricula"
        required
      />

      <text-input
        size="144"
        name="phonenumber"
        label="Telefone"
        model="PhoneNumber"
        :update="updateValue"
        :form="Form"
        :maxlength="12"
        :validationmodel="$v.Form.PhoneNumber"
      />
    </div>

    <div>
      <h2 class="md-title s1-U__text-color--primary s1-U__mg--bt8">
        Acesso
      </h2>
      <p
        v-show="
          (Form.FirstName || Form.LastName) &&
            Form.UserName !== simpletext(Form.FullUserName)
        "
      >
        <span class="s1-U__mg--rt8">sugestão de login:</span>
        <span
          class="s1-U__text-color--accent md-body-2"
          style="cursor: pointer"
          @click="updateValue('UserName', simpletext(Form.FullUserName))"
          >{{ simpletext(Form.FullUserName) }}</span
        >
      </p>

      <div class="s1-U__align-children--top">
        <text-input
          size="180"
          name="username"
          label="Login"
          model="UserName"
          :update="updateValue"
          :form="Form"
          :rules="[
            { name: 'required', text: 'Campo obrigatório' },
            { name: 'minLength', text: 'Mínimo de 4 caracteres' }
          ]"
          :blur="() => $v.Form.UserName.$touch()"
          :focus="() => $v.Form.UserName.$reset()"
          :maxlength="15"
          :validationmodel="$v.Form.UserName"
          required
        />

        <div class="s1-U__pd8 s1-U__flex-shrink-0"></div>

        <text-input
          size="180"
          name="password"
          label="Senha"
          model="Password"
          :update="updateValue"
          :form="Form"
          :rules="[{ name: 'required', text: 'Campo obrigatório' }]"
          :blur="() => $v.Form.Password.$touch()"
          :focus="() => $v.Form.Password.$reset()"
          type="password"
          :validationmodel="$v.Form.Password"
          autocomplete="false"
          required
        />

        <div class="s1-U__pd8 s1-U__flex-shrink-0"></div>

        <div class="s1-U__pd--tp20 s1-U__pd--bt8">
          <md-switch v-model="Form.Active" class="s1-U__mg0"></md-switch>
          <md-tooltip md-direction="right">
            {{ Form.Active ? "Ativo" : "Inativo" }}
          </md-tooltip>
        </div>
      </div>

      <text-input
        size="210"
        name="email"
        label="E-mail"
        model="Email"
        :update="updateValue"
        :form="Form"
        :rules="[
          { name: 'required', text: 'Campo obrigatório' },
          { name: 'email', text: 'Informe um e-mail válido' }
        ]"
        :blur="() => $v.Form.Email.$touch()"
        :focus="() => $v.Form.Email.$reset()"
        :maxlength="20"
        type="email"
        :validationmodel="$v.Form.Email"
        required
      />
    </div>
  </form>
</template>

<script>
import TextInput from "../../components/Inputs/TextInput";

export default {
  name: "UserForm",
  components: { TextInput },
  props: ["Form", "$v", "updateValue", "simpletext"]
};
</script>
