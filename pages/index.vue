<template>
    <Header :title="staticInfo?.title" :subtitle="staticInfo?.subtitle" :video="staticInfo?.video_url" />
    <Services />
    <About />
    <Doctors />
    <ContactForm />
    <Media />
    <Certificates />
    <Reviews />
    <ContactInfo :staticInfo="staticInfo" />
</template>

<script setup>
const translationData = useState('translations', () => { });

const { data: staticInfo } = await useMyFetch('/static_infos');
const { data: translatons } = await useMyFetch('/translations');
translationData.value = translatons;
</script>

<style scoped></style>