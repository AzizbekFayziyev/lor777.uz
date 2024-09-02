<template>
    <!-- Button that appears when the user scrolls down -->
    <Transition name="fade">
        <button v-if="isVisible" @click="scrollToTop"
            class="fixed bottom-6 right-6 z-50 w-12 h-12 grid place-content-center bg-cerulean-blue-500 text-white rounded-full shadow-lg hover:bg-cerulean-blue-600 transition-colors">
            <UIcon name="i-heroicons-arrow-small-up" class="text-2xl" />
        </button>
    </Transition>
</template>

<script setup>
const isVisible = ref(false);

// Function to scroll to the top
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    if (window.location.hash) {
        // Remove the hash from the URL
        const url = window.location.href.split('#')[0];
        window.history.replaceState(null, null, url);
    }
};

// Function to check the scroll position and toggle the button visibility
const checkScrollPosition = () => {
    isVisible.value = window.scrollY > 300;
};

onMounted(() => {
    window.addEventListener('scroll', checkScrollPosition);
});

onUnmounted(() => {
    window.removeEventListener('scroll', checkScrollPosition);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>