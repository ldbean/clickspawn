<template>
    <div class="flex flex-col justify-between md:gap-10 gap-0 items-center">
        <Navbar></Navbar>
        <slot></slot>
        <Footer></Footer>
    </div>
</template>

<script setup>
useHead({
  title: 'ClickSpawn',
  meta: [
    { name: 'description', content: 'A random words generator to help the next idea click' },
    { property: 'og:title', content: 'ClickSpawn | Creative Generator' },
    { property: 'og:description', content: 'A random words generator to help the next idea click' },
  ],
})
</script>
