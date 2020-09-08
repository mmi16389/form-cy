<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">

 <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></v-checkbox>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
        id="submit-btn"
      >
        Validate
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
      </v-col>

    </v-row>
  </v-container>
</template>

<script lang="ts">
import { VForm } from '@/types'
import Vue from 'vue'
import { Component, Ref } from 'vue-property-decorator'

@Component
export default class Form extends Vue {
    @Ref('form') readonly form!: VForm;

    valid = true;

    name = '';

    nameRules = [
      (v: any) => !!v || 'Name is required',
      (v: any) => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ];

    email= '';

    emailRules= [
      (v: any) => !!v || 'E-mail is required',
      (v: any) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ];

    select= null;

    items= [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4'
    ];

    checkbox= false;

    validate () {
      this.form.validate()
    }

    reset () {
      this.form.reset()
    }

    resetValidation () {
      this.form.resetValidation()
    }
}
</script>
