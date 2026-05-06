<script setup>
const links = [
    { label: "Creature", value: '/creature' },
    { label: "Character", value: '/character' },
    { label: "Object", value: '/object' },
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
                    <NuxtLink v-for="link in links" :to="link.value" class="w-full">
                        <button  class="w-full">
                            {{ link.label }}
                        </button>
                    </NuxtLink>
                    <Transition name="fade-in">
                        <NuxtLink :to="randomSpawner.value" class="w-full">
                            <button v-if="mounted" class="w-full">
                                Surprise Me!
                            </button>
                        </NuxtLink>
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
