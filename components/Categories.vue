<script setup>
const props = defineProps({
    names: Array,
});
</script>

<template>
    <div v-for="name for names" class="rounded-full bg-gray-500 text-black">
        <p>
            {{ name }} test
        </p>
    </div>
</template>
