<template>
    <nav class="flex justify-between items-center mt-4">
        <img src="/logo.svg" alt="lor777 logo">

        <div class="hidden sm:flex gap-4">
            <a target="_blank"
                href="https://www.google.com/maps?ll=41.339222,69.290487&z=16&t=m&hl=en&gl=US&mapclient=embed&cid=9819244691213668220"
                class="btn-outline">
                <UIcon name="i-heroicons-map-pin" class="sm:text-lg" /> Улица Богишамол 1
            </a>

            <a href="tel:+998881080707" class="btn-outline">
                <UIcon name="i-heroicons-phone" class="sm:text-lg" /> +998 88 108 07 07
            </a>
        </div>

        <UPopover class="sm:hidden">
            <UButton icon="i-heroicons-list-bullet" size="lg" color="primary" square variant="solid" />

            <template #panel>
                <div class="rounded-2xl">
                    <div class="p-4 flex flex-col gap-4">
                        <a v-for="link in navLinks" class="hover:text-cerulean-blue-500 transition-colors"
                            :href="link.path">{{ link.name }}</a>
                    </div>
                </div>
            </template>
        </UPopover>
    </nav>

    <FeaturesScrollToTop />
</template>

<script setup>

</script>