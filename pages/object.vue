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
        { label: "Main Form", value: useGetRandomItem([mech, tech, accessory]) },
        { label: "Secondary Form", value: useGetRandomItem([plant, mineral, animal]) },
        { label: "Material", value: useGetRandomItem([mineral, fabric]) },
        { label: "Accents", value: useGetRandomItem([mineral, plant, mech, tech, animal, fabric]) },
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
            <h1>Spawn an <span class="text-teal-700">Object</span></h1>
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


