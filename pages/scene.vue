<script setup>
import data from '@/data/index.json'

const animal = data.categories[0]
const plant = data.categories[1]
const mineral = data.categories[2]
const mood = data.categories[6]
const setting = data.categories[7]

const componentKey = ref(0)
const forceRerender = () => {
      componentKey.value += 1
}


const categories = computed(() => {
    componentKey.value
    return [
        { label: "Subject", value: useGetRandomItem([plant, mineral, animal]) },
        { label: "Elements", value: useGetRandomItem([plant, mineral]) },
        { label: "Secondary Elements", value: useGetRandomItem([plant, mineral]) },
        { label: "Setting", value: setting },
        { label: "Mood", value: mood },
    ]
})

definePageMeta({
    layout: "default",
})

const mounted = ref(false);

onMounted(() => {
    mounted.value = true;
});

</script>

<template>
    <Card>
        <Container v-if="mounted">
            <h1>Spawn a <span class="text-teal-700">Scene</span></h1>
            <Container class="gap-2 prose">
                <template v-for="(cat, index) in categories" :key="`${componentKey}-${index}`">
                    <Spawner
                        :category="cat.value"
                        :label="cat.label"
                    />
                </template>
            </Container>
            <button @click="forceRerender">
                Get Inspired Idiot &hearts;
            </button>
        </Container>
    </Card>
</template>

