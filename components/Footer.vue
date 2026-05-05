<template>
    <Container>
        <footer class="bg-green-500 h-[200px] w-[100vw] mt-4 flex items-center p-5">
            <Container>
                <h3 class="prose">LINKS</h3>
                <ul class="grow">
                    <li class="hover:underline">
                        <NuxtLink to="https://github.com/ldbean/clickspawn">
                            Source Code
                        </NuxtLink>
                    </li>
                    <li class="hover:underline">
                        <NuxtLink to="https://ko-fi.com/ldbean">
                            Buy Bean a coffee! &hearts;
                        </NuxtLink>
                    </li>
                </ul>
                <p class="justify-end">Copyright © 2026 - All rights reserved by <NuxtLink to="https://ldbean.com">ldbean</NuxtLink></p>
            </Container>
        </footer>
    </Container>
</template>
