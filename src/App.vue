<script setup lang="ts">
import Alert from './components/Alert.vue';
import Table from './components/Table.vue';
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <Alert type="secondary">
      <span class="font-bold">Danger</span> alert! You should check in on some of those fields below!!!
    </Alert>
  </div>
  <div class="container mx-auto px-4 py-12">
    <Table />
  </div>
</template>

<style scoped>

</style>
