<template>
    <section id="reviews" class="mt-20">
        <div class="flex justify-between items-center  mb-8">
            <h3 class="text-3xl font-semibold">{{translations?.['main.comment.text']}}</h3>
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
            <div v-for="review in reviewsData" :key="review.id"
                class="bg-block-bg p-6 rounded-3xl md:min-w-[580px] sm:min-w-[400px] min-w-[320px] max-w-[580px] min-h-[250px]">
                <div class="flex items-center justify-between">
                    <h5 class="text-xl font-semibold">{{ review?.title }}</h5>
                    <span class="text-sm text-blue-gray">{{ review?.date }}</span>
                </div>

                <div class="flex text-blue-gray gap-2 mt-4 mb-6">
                    <span v-for="tag in review?.illnesess" :key="tag" class="p-1 px-2 rounded-3xl bg-white">{{ tag.title
                        }}</span>
                </div>

                <div v-html="review?.text" class="text-sm text-blue-gray"></div>
            </div>
            
        </div>
    </section>
</template>

<script setup>
const translations = useState('translations');
const scrollContainer = ref(null);

const { data } = await useMyFetch('/reviews');
const { results: reviewsData } = data.value;

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