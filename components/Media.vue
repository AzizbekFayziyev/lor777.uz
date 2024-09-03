<template>
    <section class="mt-20">
        <h3 class="text-3xl font-semibold mb-8">Наши фото и медиа</h3>

        <Swiper :slidesPerView="1" :space-between="10" :breakpoints="{
            '640': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }" :loop="true" :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }" :modules="[Autoplay]">
            <SwiperSlide v-for="(i, idx) in media" :key="idx">
                <img v-motion="{
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
                }" class="rounded-3xl 2xl:w-[450px] w-[400px] cursor-grab" :src="i" alt="doctor">
            </SwiperSlide>
        </Swiper>
    </section>
</template>

<script setup>
const media = ['/img/media1.png', '/img/media2.png', '/img/media3.png', '/img/media1.png', '/img/media2.png', '/img/media3.png'];
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
</script>