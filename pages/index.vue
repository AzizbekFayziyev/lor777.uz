<template>
    <Header :title="staticInfo?.title" :subtitle="staticInfo?.subtitle" :video="staticInfo?.video_url" />
    <Services />
    <About />
    <Media />
    <ContactForm />
    <Doctors />
    <Certificates />
    <Reviews />
    <ContactInfo :staticInfo="staticInfo" />
</template>

<script setup>
const { data: staticInfo } = await useMyFetch('/static_infos');

</script>

<style scoped></style>