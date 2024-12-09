<template>
  <div>
    <div>
      <p>Info user</p>
      <v-btn color="primary" @click="handleClick">Vuetify Button</v-btn>
      <TeleportButton to="#header-teleport">
        <button class="header-button" @click="handleClick">
          Profile Button
        </button>
      </TeleportButton>
    </div>
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template #activator="{ props }">
        <v-text-field
          v-bind="props"
          v-model="formattedDate"
          readonly
          @click:clear="clearDate"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        @update:model-value="updateDate"
        locale="en"
        no-title
      ></v-date-picker>
    </v-menu>
  </div>
</template>
<script lang="ts" setup>
import { useAuth, useSnackbar } from "~/composables";
const { infoUser } = useAuth();
const { showSnackbar } = useSnackbar();

const date = ref<string | null>(null);
const menu = ref(false);

const formattedDate = computed(() => {
  return date.value ? new Date(date.value).toLocaleDateString() : "";
});

const updateDate = (newDate: string | null): void => {
  date.value = newDate;
  menu.value = false; // Đóng menu sau khi chọn ngày
};

const clearDate = () => {
  date.value = null;
};

const handleClick = () => {
  showSnackbar("Get info success", "success");
};

onMounted(() => {
  infoUser();
});
</script>
