<template>
   <div class="flex xl:flex-row flex-col items-start gap-4 rounded-3xl p-2 border border-stroke min-h-[300px]">
  <img
    class="rounded-3xl object-cover sm:w-[265px] w-full max-h-[400px] h-full mx-auto"
    :src="img"
    alt="service image"
  />

  <div class="p-2 py-3 flex flex-col gap-4 w-full h-full">
    <div class="flex-grow">
      <span class="text-blue-gray">{{ category }}</span>

      <h4 class="text-xl font-semibold my-2">{{ title }}</h4>

      <div class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="tag in tags"
          :key="tag"
          class="bg-[#F5F5F7] p-2 rounded-3xl text-sm"
          >{{ tag.title }}</span
        >
      </div>
    </div>

    <div class="mt-auto mx-auto sm:mx-0">
      <a href="#contact">
        <UButton class="text-lg" size="lg" variant="link"
          >Свяжется с нами
          <UIcon name="i-heroicons-phone-16-solid" />
        </UButton>
      </a>
    </div>
  </div>
</div>

</template>

<script setup>
const { category, title, tags, img } = defineProps(['category', 'title', 'tags', 'img'])
</script>