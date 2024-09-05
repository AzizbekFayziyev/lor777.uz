<template>
    <section class="mt-20">
        <h3 class="text-3xl font-semibold mb-8">{{translations?.['main.media.text']}}</h3>

        <Swiper style="height: 330px" :slidesPerView="1" :space-between="10" :pagination="{
            clickable: true,
            dynamicBullets: true,
        }" :breakpoints="{
            '640': {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }" :loop="true" :modules="[Pagination]">
            <template v-for="(i, idx) in media" :key="idx">
                <SwiperSlide v-if="i?.image">
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
                    }" class="rounded-3xl 2xl:w-[450px] w-[400px] h-[300px] cursor-grab object-cover" :src="i?.image"
                        alt="image">
                </SwiperSlide>
                <SwiperSlide v-if="i?.video_url">
                    <iframe v-motion="{
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
                    }" :src="i?.video_url" class="rounded-3xl w-full h-[300px] cursor-grab"
                        frameborder="0"></iframe>
                </SwiperSlide>
            </template>
        </Swiper>
    </section>
</template>

<script setup>
const { data } = await useMyFetch('/media');
const { results: media } = data.value;
const translations = useState('translations');

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
</script>