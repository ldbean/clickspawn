<script setup>
import data from '@/data/index.json'

const animal = data.categories[0]
const plant = data.categories[1]
const mineral = data.categories[2]
const mech = data.categories[3]
const tech = data.categories[4]
const fabric = data.categories[5]
const mood = data.categories[6]
const setting = data.categories[7]
const accessory = data.categories[8]

const componentKey = ref(0)
const forceRerender = () => {
      componentKey.value += 1
}


const categories = computed(() => {
    componentKey.value
    return [
        { label: "Spirit", value: animal },
        { label: "Style", value: useGetRandomItem([plant, mineral, animal, fabric]) },
        { label: "Hobby/Interest", value: useGetRandomItem([mech, tech, setting, plant, mineral, animal, accessory]) },
        { label: "Accessory", value: useGetRandomItem([mech, tech, plant, mineral, accessory]) },
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
        <Container v-if="mounted" class="prose">
            <h1>Spawn a Character</h1>
            <Container class="gap-2">
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


