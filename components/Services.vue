<template>
    <section id="services" class="mt-20">
        <h3 class="text-3xl text-center font-semibold mb-8">Наши услуги</h3>

        <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
            <ServiceCard v-for="(service, idx) in servicesData" v-motion="{
                initial: {
                    scale: 0
                },
                visible: {
                    scale: 1,
                    transition: {
                        type: 'spring',
                        stiffness: 250,
                        damping: 25,
                        mass: 0.5,
                        delay: 150 * (idx + 1),
                    },
                }
            }" :category="service.category" :tags="service.tags" :title="service.title" :img="service.img" />
        </div>
    </section>
</template>

<script setup>
const servicesData = [
    {
        img: "/img/service1.png",
        category: "Заболевания носа",
        title: "Заболевания носа и околоносовых пазух",
        tags: ['гайморит', 'сфеноидит', 'фронтит', 'этмоидит', 'риниты, в том числе аллергические']
    },
    {
        img: "/img/service2.png",
        category: "Заболевания горла",
        title: "Заболевания горла",
        tags: ['Ларингит', 'ОРВИ', 'Тонзиллит', 'Фарингит',]
    },
    {
        img: "/img/service3.png",
        category: "Заболевания уха",
        title: "Заболевания уха",
        tags: ['Евстахиит', 'Мастоидит', 'Отиты и тимпаниты', 'Отомикоз', 'Ушная пробка', 'Отосклероз']
    },
    {
        img: "/img/service4.png",
        category: "Оперативная отоларингология",
        title: "Оперативная отоларингология",
        tags: ['вазотомия нижних носовых раковин', 'удаление инородного тела носа', 'септопластика', 'гайморотомия']
    }
]
</script>