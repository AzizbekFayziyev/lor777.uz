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
const { data: staticInfo } = await useMyFetch('/static_infos');

</script>

<style scoped></style>