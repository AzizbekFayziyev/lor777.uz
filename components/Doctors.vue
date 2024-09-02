<template>
    <section id="doctors" class="mt-20">
        <h3 class="text-3xl font-semibold mb-8">Наши доктора</h3>

        <div class="flex sm:flex-row flex-col sm:gap-4 gap-8 justify-between">
            <div v-for="(doctor, idx) in doctors" v-motion="{
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
            }" class="sm:w-[450px] w-full">
                <img class="rounded-3xl w-full" :src="doctor.img" :alt="doctor.name">
                <h4 class="text-xl mt-4">{{ doctor.name }}</h4>
                <p class="text-blue-gray mt-2">{{ doctor.category }}</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const doctors = [
    {
        name: "Якубов Ражаббой Фарходович",
        category: "Главный доктор оториноларинголог",
        img: "/img/media1.png",
    },
    {
        name: "Киргизбоев Ботир Тохирович",
        category: "Главный доктор оториноларинголог",
        img: "/img/media2.png",
    },
    {
        name: "Тохиров Бобур Ботирович",
        category: "Главный доктор оториноларинголог",
        img: "/img/media3.png",
    }
]
</script>