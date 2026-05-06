
<template>
    <header class="flex flex-row flex-wrap items-center justify-between gap-x-6 gap-y-4 md:rounded-full bg-gray-700 p-2 px-5 md:w-[90vw] w-full md:my-4 my-0 md:mx-auto">
        <div class="flex items-center justify-between">
            <a href="/" class="text-xl uppercase font-bold text-zinc-800 flex items-center">
                <span class="text-green-300 text-3xl mr-1">&#10070;</span>
                <span class="text-green-100">ClickSpawn</span>
            </a>
        </div>
        <nav class="flex w-auto">
          <ul class="flex flex-row gap-3 md:text-[14px] text-xs text-green-500 my-auto mr-5 uppercase">
            <li><NuxtLink to="/creature">Creature</NuxtLink></li>
            <li><NuxtLink to="/character">Character</NuxtLink></li>
            <li><NuxtLink to="/object">Object</NuxtLink></li>
            <li><NuxtLink to="/scene">Scene</NuxtLink></li>
            <li class="text-gray-400"><NuxtLink to="/about">About</NuxtLink></li>
          </ul>
        </nav>
    </header>
</template>
