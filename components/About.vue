<template>
    <section id="about" class="mt-20 flex lg:flex-row flex-col gap-6 bg-block-bg rounded-3xl p-2 overflow-hidden">
        <img v-motion="{
            initial: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { delay: 200 } }
        }" class="rounded-3xl lg:max-w-[650px] w-full max-h-[500px] object-cover" src="/img/about.png"
            alt="about image">

        <div v-motion="{
            initial: { x: 100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { delay: 400 } }
        }" class="py-6 px-4">
            <h3 class="font-semibold lg:text-3xl text-2xl font-unbounded max-w-[400px]">
                {{ translations?.['main.patient.des2'] }}
            </h3>

            <h5 class="sm:mt-10 mt-6 text-blue-gray">{{ translations?.['main.lor.about.title2'] }}</h5>

            <p class="mt-4">
                {{ translations?.['main.lor.desc'] }}
                <br> <br>
                {{ translations?.['main.lor.desc2'] }}
            </p>

            <a :href="`tel:${translations?.['address.telefon3'].replace(/\s+/g, '')}`">
                <UButton class="mt-8" icon="i-heroicons-phone-16-solid" size="xl">
                    {{ translations?.['main.call.number.button'] }}</UButton>
            </a>
        </div>
    </section>
</template>

<script setup>
const translations = useState('translations');
</script>