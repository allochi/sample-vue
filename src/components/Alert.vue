<script setup lang="ts">
const props = defineProps({
    type: String
});
</script>

<template>
    <h1>Hello Blue</h1>
    <div :class="type" role="alert">
        <slot />
    </div>
</template>

<style scoped>
.base {
    @apply text-sm text-white rounded-md p-4;
}

.danger {
    @apply base bg-red-500;
}

.secondary {
    @apply base bg-gray-500;
}

.info {
    @apply base bg-blue-500;
}
</style>
