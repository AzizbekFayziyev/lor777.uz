<template>
    <footer class="mt-20 mb-10 bg-block-bg rounded-3xl px-12 pt-12 pb-6">
        <div class="flex justify-between gap-6 flex-wrap">
            <div>
                <img width="280" src="/logo.svg" alt="lor777 logo">
                <h5 class="text-lg font-semibold mb-2 mt-8">{{ translations?.['address.wrok.hours'] }}</h5>
                <p>{{ translations?.['address.work.schedule'] }}</p>
            </div>

            <div>
                <div>
                    <h5 class="text-lg font-semibold mb-4">{{ translations?.['address.address.title'] }}</h5>
                    <p>{{ staticInfo?.adres }}</p>
                </div>

                <div class="mt-6">
                    <h5 class="text-lg font-semibold mb-4">{{ translations?.['address.email.title'] }}</h5>
                    <a :href="`mailto:${staticInfo?.email}`">{{ staticInfo?.email }}</a>
                </div>
            </div>

            <div>
                <h5 class="text-lg font-semibold mb-4">{{ translations?.['address.menu'] }}</h5>

                <ul class="text-blue-gray flex flex-col gap-2">
                    <li><a href="#services">{{ translations?.['links.services'] }}</a></li>
                    <li><a href="#about">{{ translations?.['links.about'] }}</a></li>
                    <li><a href="#doctors">{{ translations?.['links.doctors'] }}</a></li>
                    <li><a href="#reviews">{{ translations?.['links.reviews'] }}</a></li>
                    <li><a href="#contact">{{ translations?.['links.contact'] }}</a></li>
                </ul>
            </div>

            <div class="max-w-[250px] w-full">
                <h5 class="text-lg font-semibold mb-4">{{ translations?.['address.services.title'] }}</h5>

                <ul class="text-blue-gray flex flex-col gap-2">
                    <li><a href="#services">{{ translations?.['address.service1'] }}</a></li>
                    <li><a href="#services">{{ translations?.['address.service2'] }}</a></li>
                    <li><a href="#services">{{ translations?.['address.service3'] }}</a></li>
                    <li><a href="#services">{{ translations?.['address.service4'] }}</a></li>
                </ul>
            </div>
        </div>

        <div class="mt-10 pt-4 border-t border-stroke">
            {{ translations?.['address.footer.text'] }}
        </div>
    </footer>
</template>

<script setup>
const { data: staticInfo } = await useMyFetch('/static_infos');
const translations = useState('translations');
</script>