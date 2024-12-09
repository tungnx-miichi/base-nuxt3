<script setup lang="ts">
// Props nhận vào
interface Column {
  key: string;
  title: string;
  align?: string;
  sortable?: boolean;
}

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array as PropType<Column[]>,
    required: true,
  },
});

// Pagination
const itemsPerPage = ref(5);
const currentPage = ref(1);
const pageCount = computed(() =>
  Math.ceil(props.data.length / itemsPerPage.value)
);
</script>

<template>
  <v-data-table
    v-model:page="currentPage"
    :headers="(columns as any)"
    :items="data"
    :items-per-page="itemsPerPage"
  >
    <template v-slot:top>
      <v-text-field
        :model-value="itemsPerPage"
        class="pa-2"
        label="Items per page"
        max="15"
        min="-1"
        type="number"
        hide-details
        @update:model-value="itemsPerPage = parseInt($event, 10)"
      ></v-text-field>
    </template>

    <template v-slot:bottom>
      <div class="text-center pt-2">
        <v-pagination v-model="currentPage" :length="pageCount"></v-pagination>
      </div>
    </template>
  </v-data-table>
</template>

<style scoped>
.v-container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
