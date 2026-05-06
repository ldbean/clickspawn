
<script setup>
const props = defineProps({
    category: Object,
    label: String
});


const { spawnedSpecItems, spawnSpecItem } = useSpawnSpecific(props.category, 1);
const mounted = ref(false);

onMounted(() => {
    mounted.value = true;
});

defineExpose({ useSpawnSpecific })
</script>

<template>
    <div v-if="mounted" class="relative my-3">
        <div v-for="item in spawnedSpecItems">
            <h4 class="uppercase absolute -top-10 left-1/2 -ml-[40%] z-10 rounded-full bg-teal-700 text-white px-3 py-px shadow-sm">
                {{ props.label }}
            </h4>
            <span class="absolute bottom-2 left-3 text-4xl text-gray-300 hover:text-gray-400/60 select-none cursor-pointer -mr-10" :aria-label="`Reroll subcategory for ${props.label}`" @click="spawnSpecItem"> &#8635;</span>
            <Result
                :key="item.id"
                :category="item.category"
                :subcategory="item.subcategory"
                :subject="item.subject"
            />
        </div>
    </div>
</template>
