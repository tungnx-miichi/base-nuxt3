<template>
  <v-dialog v-model="isOpen" :max-width="width">
    <template #activator="{ props }">
      <slot name="activator" v-bind="props" />
    </template>

    <v-card>
      <v-card-title>
        <slot name="title">Default Title</slot>
      </v-card-title>
      <v-card-text>
        <slot> Default Content </slot>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="close">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
// Props từ parent component
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  width: {
    type: String,
    default: "500px",
  },
});

const isOpen = ref(false);

// Theo dõi sự thay đổi của modelValue và cập nhật isOpen
watch(
  () => props.modelValue,
  (newValue) => {
    isOpen.value = newValue;
  }
);

// Đóng modal khi nhấn "Close"
function close() {
  isOpen.value = false;
}
</script>

<style scoped>
/* Tùy chỉnh nếu cần */
</style>
