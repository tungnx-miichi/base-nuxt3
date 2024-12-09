<script lang="ts" setup>
interface Props {
  to: string;
}

defineProps<Props>();

const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
});
</script>

<template>
  <Teleport v-if="isMounted" :to="to">
    <slot></slot>
  </Teleport>
</template>
