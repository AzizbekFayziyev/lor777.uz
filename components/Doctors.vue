<template>
    <section id="doctors" class="mt-20">
        <h3 class="text-3xl font-semibold mb-8">{{translations?.['main.doctor.text']}}</h3>

        <Swiper :slidesPerView="1" :space-between="10" :breakpoints="{
            '640': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '880': {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }" :loop="true" :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
        }" :modules="[Autoplay]">
            <SwiperSlide v-for="(doctor, idx) in doctorsData" :key="idx">
                <div :key="doctor?.id" v-motion="{
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
                            delay: 200,
                        },
                    }
                }" class="w-full">
                    <img class="rounded-3xl w-full h-[400px] sm:h-[500px] object-cover" :src="doctor?.image" :alt="doctor?.title">
                    <h4 class="text-xl mt-4">{{ doctor?.title }}</h4>
                    <p class="text-blue-gray mt-2">{{ doctor?.subtitle }}</p>
                </div>
            </SwiperSlide>
        </Swiper>

        <!-- <div class="flex sm:flex-row flex-col sm:gap-4 gap-8 justify-between">
            <div v-for="(doctor, idx) in doctorsData" :key="doctor?.id" v-motion="{
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
            }" class="sm:w-[450px] w-full">
                <img class="rounded-3xl w-full sm:max-h-[450px] max-h-[350px] object-cover" :src="doctor?.image"
                    :alt="doctor?.title">
                <h4 class="text-xl mt-4">{{ doctor?.title }}</h4>
                <p class="text-blue-gray mt-2">{{ doctor?.subtitle }}</p>
            </div>
        </div> -->
    </section>
</template>

<script setup>
const { data } = await useMyFetch('/workers');
const { results: doctorsData } = data.value;
const translations = useState('translations');

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
</script>