<template>
        <span ref="counterElement" v-motion :initial="initialStyle" :enter="enterStyle">
            {{ displayValue }}
        </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

// Props
const { endVal } = defineProps(['endVal']);

// Configuration
const duration = 2000; // Duration of the animation in milliseconds
const counterElement = ref(null);
const inView = ref(false);
const displayValue = ref(0);

// Initial and enter styles for motion animation
const initialStyle = { opacity: 0, y: -20 };
const enterStyle = { opacity: 1, y: 0, transition: { duration: duration / 1000, delay: 0.2 } };

// Function to handle the animation when the element is visible
function handleIntersection(entries) {
    const entry = entries[0];

    if (entry.isIntersecting) {
        inView.value = true; // Trigger the animation by setting `inView` to true
    } else {
        inView.value = false; // Reset the animation state when the element is out of view
        displayValue.value = 0; // Reset the display value to 0
    }
}

// Watch for when `inView` changes to true, and start the count-up animation
watch(inView, (newVal) => {
    if (newVal) {
        let startTime = null;

        // Animation loop to update the counter
        function animateCountUp(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const progressRatio = Math.min(progress / duration, 1);
            displayValue.value = Math.floor(progressRatio * endVal);

            if (progress < duration) {
                requestAnimationFrame(animateCountUp);
            }
        }

        requestAnimationFrame(animateCountUp);
    }
});

onMounted(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    if (counterElement.value) {
        observer.observe(counterElement.value);
    }

    onUnmounted(() => {
        if (counterElement.value) {
            observer.unobserve(counterElement.value);
        }
    });
});
</script>