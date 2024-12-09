<template>
  <div>
    <div class="flex">
      <div class="box" id="div1">
        div A
        <v-btn @click="handleClick">aa</v-btn>
      </div>
      <div class="box" id="header-teleport">
        div b
        <TeleportButton to="#header-teleport">
          <p v-if="isShow">noi dung teleport</p>
        </TeleportButton>
      </div>
    </div>

    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-bind="activatorProps"
          color="surface-variant"
          text="Open Dialog"
          variant="flat"
        ></v-btn>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

    <div>
      <BaseModal v-model="isPopupOpen" width="600px">
        <template #activator="{ props }">
          <v-btn v-bind="props" color="primary">Open Popup</v-btn>
        </template>

        <template #title> Custom Title </template>

        <template>
          <p>This is the custom content inside the popup.</p>
        </template>
      </BaseModal>
    </div>
    <BaseTable :data="desserts" :columns="headers" />
  </div>
</template>
<script lang="ts" setup>
import { useSnackbar } from "~/composables";
const { showSnackbar } = useSnackbar();
const isShow = ref(false);
const isPopupOpen = ref(false);
const headers = [
  {
    align: "start",
    key: "name",
    sortable: true,
    title: "Dessert (100g serving)",
  },
  { align: "center", key: "calories", sortable: true, title: "Calories" },
  { align: "end", key: "fat", sortable: false, title: "Fat (g)" },
  { key: "carbs", title: "Carbs (g)" },
  { key: "protein", title: "Protein (g)" },
];
const desserts = [
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    iron: 1,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    iron: 1,
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    iron: 7,
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    iron: 8,
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    iron: 16,
  },
  {
    name: "Jelly bean",
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    iron: 0,
  },
  {
    name: "Lollipop",
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    iron: 2,
  },
  {
    name: "Honeycomb",
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    iron: 45,
  },
  {
    name: "Donut",
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    iron: 22,
  },
  {
    name: "KitKat",
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    iron: 6,
  },
];

const handleClick = () => {
  isShow.value = true;
  showSnackbar("Get contact success", "success");
};
</script>

<style lang="scss" scoped>
.box {
  width: 500px;
  height: 100px;
}
</style>
