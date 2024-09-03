<template>
    <header class="flex justify-between mt-10 gap-4 lg:flex-row flex-col">
        <div class="lg:max-w-[720px] w-full relative">
            <div v-motion="{
                initial: { x: -100, opacity: 0 },
                visible: { x: 0, opacity: 1 }
            }" class="bg-block-bg rounded-3xl py-8 px-6 relative z-10">
                <h1 class="text-4xl font-unbounded font-bold leading-tight">
                    {{ title }}
                </h1>
                <h3 class="text-blue-gray mt-2">
                    {{ subtitle }}
                </h3>

                <div class="flex gap-4 flex-wrap items-center justify-between mt-10">
                    <p class="flex items-center gap-2 text-blue-gray">
                        <span>Мы работаем день и ночь</span>
                        <span class="w-1 h-1 bg-blue-gray rounded-full"></span>
                        <span>24/7</span>
                    </p>

                    <UPopover class="relative z-[1050]" mode="hover" :ui="{ rounded: 'rounded-2xl' }">
                        <UButton size="xl" icon="i-heroicons-phone-16-solid">Свяжется с нами</UButton>

                        <template #panel>
                            <div class="p-4 flex flex-col gap-4 bg-white shadow-lg rounded-2xl">
                                <a class="hover:text-cerulean-blue-500 transition-colors" href="tel:+998881080707">
                                    +998 88 108 07 07
                                </a>
                                <a class="hover:text-cerulean-blue-500 transition-colors" href="tel:+998904388855">
                                    +998 90 438 88 55
                                </a>
                            </div>
                        </template>
                    </UPopover>
                </div>
            </div>

            <div class="flex sm:flex-row flex-col mt-4 gap-4 text-blue-gray relative z-0">
                <div v-motion="{
                    initial: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { delay: 200 } }
                }" class="bg-block-bg w-full rounded-3xl py-8 px-6">
                    <h4>Довольных Пациентов</h4>
                    <p class="text-5xl font-unbounded font-bold text-cerulean-blue-500 mt-4 flex">
                        <FeaturesCountUp :end-val="500" /> +
                    </p>
                    <p class="mt-10">Самые лучшие - врачи и оборудование все для вашего здоровье</p>
                </div>

                <div v-motion="{
                    initial: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1, transition: { delay: 400 } }
                }" class="bg-block-bg w-full rounded-3xl py-8 px-6">
                    <h4>Наши врачи</h4>
                    <img class="mt-4" width="200" src="/img/doctors.png" alt="doctors team">
                    <p class="mt-6">Более 10 лет заботы о вашем здоровье</p>
                </div>
            </div>
        </div>


        <div v-if="video === null" v-motion="{
            initial: {
                x: 100,
                opacity: 0
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    delay: 600
                }
            }
        }"
            class="headerBg lg:max-w-[720px] max-h-[700px] h-[400px] lg:h-auto w-full bg-block-bg rounded-3xl py-8 px-6 flex items-end">
            <h2 class="text-2xl text-white relative max-w-[480px]">Современное оборудование и методики лечения</h2>
        </div>

        <iframe v-else v-motion="{
            initial: {
                x: 100,
                opacity: 0
            },
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    delay: 600
                }
            }
        }" :src="video" class="lg:max-w-[720px] max-h-[700px] h-[400px] lg:h-auto w-full rounded-3xl" frameborder="0"></iframe>
    </header>
</template>

<script setup>
const { title, subtitle, video } = defineProps(['title', 'subtitle', 'video']);

console.log(video);

</script>

<style scoped>
.headerBg {
    @apply relative overflow-hidden;
    background: url("/img/headerBg.png") no-repeat;
    background-size: cover;
    background-position: left;

    &::before {
        content: "";
        @apply w-full h-[100%] absolute bottom-0 left-0;
        background: linear-gradient(180deg, rgba(17, 17, 51, 0) 0%, rgba(17, 17, 51, 0.56) 100%);
    }
}
</style>