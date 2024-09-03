<template>
    <footer class="mt-20 mb-10 bg-block-bg rounded-3xl px-12 pt-12 pb-6">
        <div class="flex justify-between gap-6 flex-wrap">
            <div>
                <img width="280" src="/logo.svg" alt="lor777 logo">
                <h5 class="text-lg font-semibold mb-2 mt-8">Режим работы</h5>
                <p>Каждый день 24/7</p>
            </div>

            <div>
                <div>
                    <h5 class="text-lg font-semibold mb-4">Адрес клиники</h5>
                    <p>{{staticInfo?.adres}}</p>
                </div>

                <div class="mt-6">
                    <h5 class="text-lg font-semibold mb-4">Электронная почта</h5>
                    <a :href="`mailto:${staticInfo?.email}`">{{staticInfo?.email}}</a>
                </div>
            </div>

            <div>
                <h5 class="text-lg font-semibold mb-4">Меню</h5>

                <ul class="text-blue-gray flex flex-col gap-2">
                    <li v-for="link in navLinks"><a :href="link.path">{{ link.name }}</a></li>
                </ul>
            </div>

            <div class="max-w-[250px] w-full">
                <h5 class="text-lg font-semibold mb-4">Услуги</h5>

                <ul class="text-blue-gray flex flex-col gap-2">
                    <li><a href="#services">Лечения уха</a></li>
                    <li><a href="#services">Лечения носа</a></li>
                    <li><a href="#services">Лечения горла</a></li>
                    <li><a href="#services">Лечения головы</a></li>
                </ul>
            </div>
        </div>

        <div class="mt-10 pt-4 border-t border-stroke">
            © 2024 Все права защищены.
        </div>
    </footer>
</template>

<script setup>
const { data: staticInfo } = await useMyFetch('/static_infos');
</script>