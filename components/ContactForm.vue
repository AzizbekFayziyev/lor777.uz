<template>
    <form v-motion="{
        initial: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 200,
            },
        }
    }" id="contact"
        class="mt-20 flex md:flex-row flex-col gap-8 justify-between items-center rounded-3xl p-10 bg-cerulean-blue-600">
        <h3
            class="text-white font-unbounded lg:text-5xl sm:text-4xl text-3xl font-semibold max-w-[520px] leading-tight">
            Решите ваши проблемы
            вместе с нашими докторами</h3>

        <div class="max-w-[620px] w-full">
            <div class="flex sm:flex-row flex-col sm:gap-4 gap-8">
                <UInput v-model.trim="formData.name" class="border-b flex-1 border-stroke text-white"
                    :ui="{ placeholder: 'placeholder-stroke', base: 'focus:border-white' }" variant="none"
                    placeholder="Имя *" required />
                <UInput v-model.number="formData.tel" class="border-b flex-1 border-stroke text-white"
                    :ui="{ placeholder: 'placeholder-stroke', base: 'focus:border-white' }" variant="none"
                    placeholder="Номер *" type="number" required />
            </div>

            <UInput v-model.trim="formData.message" class="border-b my-8 border-stroke text-white"
                :ui="{ placeholder: 'placeholder-stroke', base: 'focus:border-white' }" variant="none"
                placeholder="Проблема *" required />

            <UButton type="submit" color="white" class="text-cerulean-blue-500 float-right" size="xl"
                icon="i-heroicons-chevron-double-right-20-solid" trailing>Отправить</UButton>
        </div>
    </form>
</template>

<script setup>
const formData = ref({
    name: "",
    tel: "",
    message: "",
})
</script>