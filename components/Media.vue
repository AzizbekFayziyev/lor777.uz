<template>
    <section class="mt-20">
        <h3 class="text-3xl font-semibold mb-8">Наши фото и медиа</h3>

        <div class="flex xl:flex-nowrap flex-wrap gap-4 xl:justify-between justify-center">
            <img v-for="(i, idx) in media" v-motion="{
                initial: {
                    scale: 0
                },
                visible: {
                    scale: 1,
                    transition: {
                        type: 'spring',
                        stiffness: 250,
                        damping: 25,
                        mass: 0.5,
                        delay: 150 * (idx + 1),
                    },
                }
            }" class="rounded-3xl 2xl:w-[450px] w-[400px]" :src="i" alt="doctor">
        </div>
    </section>
</template>

<script setup>
const media = ['/img/media1.png', '/img/media2.png', '/img/media3.png'];
</script>