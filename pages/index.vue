<script setup>
const links = [
    { label: "Creatures", value: '/creature' },
    { label: "Characters", value: '/character' },
    { label: "Objects", value: '/object' },
    { label: "Scene", value: '/scene' },
]


const randomSpawner = useGetRandomItem(links)

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
        <Container>
            <div class="flex flex-col gap-12 items-center">
                <Container class="prose">
                    <h1>Welcome to ClickSpawn!</h1>
                </Container>
                <Container class="gap-5">
                    <p>Choose one of the spawners below to get started.</p>
                    <button v-for="link in links" class="w-full">
                        <NuxtLink :to="link.value">{{ link.label }}</NuxtLink>
                    </button>
                    <Transition name="fade-in">
                        <button v-if="mounted" class="w-full">
                            <NuxtLink :to="randomSpawner.value">Surprise Me!</NuxtLink>
                        </button>
                    </Transition>
                </Container>
            </div>
        </Container>
    </Card>
</template>


<style scoped>
.fade-in-enter-active {
    @apply transition-opacity duration-300;
}

.fade-in-enter-from {
    @apply opacity-0;
}

.fade-in-enter-to {
    @apply opacity-100;
}
</style>
