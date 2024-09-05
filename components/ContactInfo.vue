<template>
    <section v-motion="{
        initial: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delay: 200,
            },
        }
    }"
        class="mt-20 rounded-3xl border border-stroke p-2 flex gap-4 items-center md:justify-between justify-center md:flex-row flex-col">
        <div class="p-6 w-full max-w-[700px]">
            <h3 class="text-3xl font-semibold mb-8">{{ translations?.['address.consultation.text'] }}</h3>

            <div class="flex sm:justify-between justify-center sm:flex-row flex-col gap-4">
                <div class="max-w-[300px] w-full">
                    <h5 class="text-lg font-semibold mb-4">{{ translations?.['address.wrok.hours'] }}</h5>
                    <p>{{ staticInfo?.work_time }}</p>
                </div>

                <div class="max-w-[250px] w-full">
                    <h5 class="text-lg font-semibold mb-4">{{ translations?.['address.tel'] }}</h5>
                    <a v-for="tel in staticInfo?.nbm.split(',')" class="block mb-2 max-w-max"
                        :href="`tel:${tel.replace(/\s+/g, '')}`">{{ tel }}</a>

                </div>
            </div>

            <div class="flex sm:justify-between justify-center sm:flex-row flex-col gap-4 mt-10">
                <div class="max-w-[250px] w-full">
                    <h5 class="text-lg font-semibold mb-4">{{translations?.['address.address.title']}}</h5>
                    <p>{{ staticInfo?.adres }}</p>
                </div>

                <div class="max-w-[250px] w-full">
                    <h5 class="text-lg font-semibold mb-4">{{translations?.['address.email.title']}}</h5>
                    <a :href="`mailto:${staticInfo?.email}`">{{ staticInfo?.email }}</a>
                </div>
            </div>
        </div>

        <div class="max-w-[650px] w-full rounded-2xl h-[380px]" v-html="staticInfo?.map"></div>
        <!-- <iframe class="max-w-[650px] w-full rounded-2xl h-[380px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.59582507668!2d69.2903145!3d41.3394014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5e14956af57%3A0x8844f705a66e4f7c!2sLor777!5e0!3m2!1sen!2s!4v1725197418502!5m2!1sen!2s"
            style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
    </section>
</template>

<script setup>
const { staticInfo } = defineProps(['staticInfo']);
const translations = useState('translations');
</script>