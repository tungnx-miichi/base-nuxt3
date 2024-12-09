<template>
  <div class="text-center w-full">
    <v-app>
      <v-main>
        <v-container>
          <v-btn color="primary">Vuetify Button</v-btn>
          <div class="bg-primary-light text-white p-4 text-center">
            Đây là class Tailwind!
          </div>
          <div class="flex items-start">
            <p class="pt-2">tailwind</p>
            <p class="pt-2">tailwind1</p>
            <p class="pt-2">tailwind2</p>
          </div>

          <v-sheet class="mx-auto" width="500">
            <v-form ref="form">
              <v-text-field
                v-model="formData.name"
                label="Name"
                :rules="rules.required('Name')"
              />

              <v-text-field
                v-model="formData.email"
                label="Email"
                :rules="[...rules.required('email'), ...rules.email]"
              />

              <v-select
                v-model="formData.select"
                :items="items"
                :rules="[(v) => !!v || 'Item is required']"
                label="Item"
                required
              ></v-select>

              <v-checkbox
                v-model="formData.checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>

              <v-container fluid>
                <p>{{ selected }}</p>
                <v-checkbox
                  v-model="selected"
                  label="John"
                  value="John"
                ></v-checkbox>
                <v-checkbox
                  v-model="selected"
                  label="Jacob"
                  value="Jacob"
                ></v-checkbox>
              </v-container>

              <v-btn color="primary" @click="handleSubmit">Submit</v-btn>
            </v-form>
          </v-sheet>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script lang="ts" setup>
import type { VForm } from "vuetify/components";

const form = ref<VForm | null>(null);

interface FormData {
  name: string;
  email: string;
  checkbox: boolean;
  select: string;
}
type ValidationResult = {
  valid: boolean;
  errors: {
    id: string | number;
    errorMessages: string[];
  }[];
};
const formData: Ref<FormData> = ref({
  name: "",
  email: "",
  checkbox: false,
  select: "",
});

const selected = ref([]);

const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

const rules = {
  required: (filed: string) => [
    (v: string) => !!v || `This ${filed} is required`,
  ],
  email: [(v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid"],
};

const handleSubmit = async () => {
  const { valid } = (await form.value?.validate()) as ValidationResult;
  if (valid) {
    console.log("Form submitted successfully:", formData.value);
  } else {
    console.log("Form validation failed");
  }
};
</script>
