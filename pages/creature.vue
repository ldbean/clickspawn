<script setup>
import data from '@/data/index.json'

const animal = data.categories[0]
const plant = data.categories[1]
const mineral = data.categories[2]

const componentKey = ref(0)
const forceRerender = () => {
      componentKey.value += 1
}


const categories = computed(() => {
    componentKey.value
    return [
        { label: "Main Form", value: animal },
        { label: "Secondary Form", value: animal },
        { label: "Surface", value: useGetRandomItem([plant, mineral, animal]) },
        { label: "Accents", value: useGetRandomItem([mineral, plant]) },
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
            <h1>Spawn a Creature</h1>
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


