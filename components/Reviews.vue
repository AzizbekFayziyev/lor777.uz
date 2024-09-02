<template>
    <section id="reviews" class="mt-20">
        <div class="flex justify-between items-center  mb-8">
            <h3 class="text-3xl font-semibold">Отзывы</h3>
            <div class="flex gap-2">
                <button @click="scrollTo('left')"
                    class="w-12 h-12 grid place-content-center border border-stroke rounded-full">
                    <UIcon class="text-xl" name="i-heroicons-arrow-left" />
                </button>
                <button @click="scrollTo('right')"
                    class="w-12 h-12 grid place-content-center border border-stroke rounded-full">
                    <UIcon class="text-xl" name="i-heroicons-arrow-right" />
                </button>
            </div>
        </div>

        <div v-motion="{
            initial: {
                opacity: 0,
                x: -300,
            },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                        type: 'spring',
                        stiffness: 250,
                        damping: 25,
                        mass: 0.5,
                        delay: 200,
                    },
            }
        }" ref="scrollContainer" class="reviews flex sm:gap-6 gap-4 overflow-x-auto">
            <div v-for="(review, idx) in reviewsData" :key="idx"
                class="bg-block-bg p-6 rounded-3xl md:min-w-[580px] sm:min-w-[400px] min-w-[320px] min-h-[250px]">
                <div class="flex items-center justify-between">
                    <h5 class="text-xl font-semibold">{{ review.name }}</h5>
                    <span class="text-sm text-blue-gray">{{ review.date }}</span>
                </div>

                <div class="flex text-blue-gray gap-2 mt-4 mb-6">
                    <span v-for="tag in review.tags" :key="tag" class="p-1 px-2 rounded-3xl bg-white">{{ tag }}</span>
                </div>

                <p class="text-sm text-blue-gray">{{ review.desc }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const scrollContainer = ref(null);

const reviewsData = [
    {
        name: "Солиха Абдурашидова",
        date: "23.02.2023",
        tags: ['Отит', 'Болезни слюнных желез'],
        desc: `ЛОР врач-это уже наша любовь, мы ходим к нему всей семьёй, дочка даже уже не плачет спокойно проходит
                все процедуры.Медсестры тоже замечательные, всегда внимательны и аккуратны.Сама клиника всегда
                чистая, светлая и приятный персонал(ни разу не видела грубости с их стороны, даже во времена
                карантина, когда все люди были нервными и уставшими).`
    },
    {
        name: "Акмал Абдулаев",
        date: "23.02.2023",
        tags: ['Отит', 'Болезни слюнных желез'],
        desc: `ЛОР врач-это уже наша любовь, мы ходим к нему всей
                семьёй, дочка даже уже не плачет спокойно проходит
                все процедуры. Медсестры тоже замечательные, всегда внимательны и аккуратны. Сама клиника всегда чистая,`,
    },
    {
        name: "Шамсиддин Тухтамурадов",
        date: "23.02.2023",
        tags: ['Отит', 'Болезни слюнных желез'],
        desc: `ЛОР врач-это уже наша любовь, мы ходим к нему всей семьёй, дочка даже уже не плачет спокойно проходит`
    }
];

const scrollTo = (direction) => {
    if (scrollContainer.value) {
        if (direction == "right") {
            scrollContainer.value.scrollBy({
                left: 320,
                behavior: 'smooth'
            });
        } else {
            scrollContainer.value.scrollBy({
                left: -320,
                behavior: 'smooth'
            });
        }
    }
};
</script>

<style scoped>
.reviews::-webkit-scrollbar {
    display: none;
}
</style>