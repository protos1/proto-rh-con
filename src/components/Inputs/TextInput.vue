<template>
  <div class="s1-loc__md-field-wrapper" :class="`s1-U__width--${size}px`">
    <md-field
      v-if="rules"
      :md-counter="false"
      :class="{
        'md-invalid md-field-helper-text s1-U__mg--bt32':
          validationmodel.$dirty && validationmodel.$invalid
      }"
    >
      <label :for="name">{{ label }}</label>
      <md-input
        :id="name"
        :name="name"
        :type="type || 'text'"
        @blur="blur()"
        @focus="focus()"
        v-model="localmodel"
        :maxlength="maxlength"
        :required="required"
        :disabeld="disabled"
        @onchage="changeValue()"
        autocomplete="autocomplete"
      ></md-input>
      <span
        class="md-error"
        :class="{ hide: validationmodel[rule.name] }"
        v-for="(rule, i) in rules"
        :key="'rule-' + rule.name + name + i"
        >{{ rule.text }}</span
      >
    </md-field>
    <md-field :md-counter="false" v-else>
      <label :for="name">{{ label }}</label>
      <md-input
        :id="name"
        :name="name"
        :type="type || 'text'"
        v-model="localmodel"
        :maxlength="maxlength"
        :required="required"
        :disabeld="disabled"
        autocomplete="autocomplete"
      ></md-input>
    </md-field>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: [
    "size",
    "name",
    "label",
    "form",
    "model",
    "rules",
    "maxlength",
    "type",
    "validationmodel",
    "blur",
    "focus",
    "required",
    "disabled",
    "update",
    "autocomplete"
  ],
  data: function() {
    return {
      localmodel: this.form[this.model]
    };
  },
  methods: {
    changeValue() {
      this.update(this.model, this.localmodel);
    }
  },
  watch: {
    localmodel: function() {
      this.changeValue();
    },
    form: {
      handler: function() {
        this.localmodel = this.form[this.model];
      },
      deep: true
    }
  }
};
</script>

<style>
.md-error.hide {
  display: none !important;
}
</style>
