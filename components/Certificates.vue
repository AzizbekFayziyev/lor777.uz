<template>
    <section class="mt-20 rounded-3xl bg-block-bg p-8">
        <div class="flex gap-4 flex-wrap justify-between items-center">
            <h3 class="text-3xl font-semibold mb-8">{{translations?.['main.certificate.text']}}</h3>
            <p class="text-sm text-blue-gray max-w-[580px]">{{translations?.['main.certificate.desc']}}</p>
        </div>

        <div class="flex gap-4 flex-wrap md:justify-between justify-center items-center mt-10">
            <img v-for="(i, idx) in certificatesData" v-motion="{
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
            }" width="250" class="p-2 border border-cerulean-blue-600 rounded-3xl block mx-auto" :src="i.image"
                alt="certificate">
        </div>
    </section>
</template>

<script setup>
const { data } = await useMyFetch('/certificates');
const { results: certificatesData } = data.value;
const translations = useState('translations');
</script>
