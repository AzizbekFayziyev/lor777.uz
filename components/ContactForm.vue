<template>
    <form @submit.prevent="onSubmit" v-motion="{
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
        class="mt-20 flex md:flex-row flex-col gap-8 justify-between items-center rounded-3xl sm:px-12 sm:py-14 p-8 bg-cerulean-blue-600">
        <h3
            class="text-white font-unbounded lg:text-4xl sm:text-3xl text-2xl font-semibold max-w-[520px] leading-tight">
            Решите ваши проблемы
            вместе с нашими докторами</h3>

        <div class="max-w-[620px] w-full">
            <div class="flex sm:flex-row flex-col sm:gap-4 gap-8">
                <UInput v-model.trim="formData.name" class="border-b flex-1 border-stroke text-white"
                    :ui="{ placeholder: 'placeholder-stroke', base: 'focus:border-white' }" variant="none"
                    maxLength="30" placeholder="Имя *" required />
                <UInput v-model="formData.number" maxLength="13"
                    class="border-b flex-1 border-stroke text-white"
                    :ui="{ placeholder: 'placeholder-stroke', base: 'focus:border-white' }" variant="none"
                    placeholder="Номер *" required />
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const formData = ref({
    name: "",
    number: "",
    message: "",
});

const onSubmit = async () => {
    await useMyFetch('/application/create', {
        method: "POST",
        body: {
            ...formData.value
        }
    });

    formData.value = {
        name: "",
        number: "",
        message: "",
    }

    toast("Ваше заявление успешно отправлено!", {
        autoClose: 3000,
        theme: "colored",
        type: "success",
    });
}
</script>