<script setup>

const props = defineProps({
    category: String,
    subcategory: String,
    subject: String,
});
</script>

<template>
    <div class="rounded-full bg-gray-200 text-black p-3 px-5 w-[380px] md:w-[500px] md:h-[60px] flex shadow-md">
        <div class="spawn-card text-right grow content-center justify-end">
            <span v-if="category" class="category">{{ category }}</span>
            <span v-if="category" class="separator"> > </span>
            <span class="subcategory">{{ subcategory }}</span>
            <span class="separator"> > </span>
            <span class="subject">{{ subject }}</span>
        </div>
    </div>
</template>
