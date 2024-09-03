<template>
    <section id="about" class="mt-20 flex lg:flex-row flex-col gap-6 bg-block-bg rounded-3xl p-2 overflow-hidden">
        <img v-motion="{
            initial: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { delay: 200 } }
        }" class="rounded-3xl lg:max-w-[650px] w-full max-h-[500px] object-cover" src="/img/about.png"
            alt="about image">

        <div v-motion="{
            initial: { x: 100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { delay: 400 } }
        }" class="py-6 px-4">
            <h3 class="font-semibold lg:text-3xl text-2xl font-unbounded">Более 10 лет заботы
                <br> о вашем здаровье
            </h3>

            <h5 class="sm:mt-10 mt-6 text-blue-gray">О “777 ЛОР”</h5>

            <p class="mt-4">
                Медицинский центр “777 ЛОР” – это учреждение, предлагающее широкий спектр медицинских услуг, включая
                амбулаторную диагностику.
                <br> <br>
                В состав центра входят врачи и кандидаты медицинских наук с многолетним опытом работы, которые в
                короткие сроки смогут правильно поставить диагноз и предложить оптимальный курс лечения для лечения
                любых заболеваний.
            </p>

            <a href="#contact">
                <UButton class="mt-8" icon="i-heroicons-phone-16-solid" size="xl">Свяжется с нами</UButton>
            </a>
        </div>
    </section>
</template>