<template>
    <section id="services" class="mt-20">

        <h3 class="text-3xl text-center font-semibold mb-8">{{ translations?.['main.service.text'] }}</h3>

        <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
            <ServiceCard v-for="(service, idx) in servicesData" :key="service.id" v-motion="{
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
            }" :category="service?.category?.title" :tags="service?.illnesess" :title="service?.title"
                :img="service?.image" />
        </div>
    </section>
</template>

<script setup>
const { data } = await useMyFetch('/services');
const { results: servicesData } = data.value;
const translations = useState('translations');
</script>