<template>
  <div class="mb-12 px-4">
    <div class="px-6">
      <img
        alt="..."
        :src="hero.imgurl"
        class="shadow-lg rounded-full max-w-full mx-auto"
      />
      <div class="pt-6 text-center">
        <h5 class="text-xl font-bold">{{ hero.name }}</h5>
        <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
          {{ hero.body.slice(0, 30) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hero'],
}
</script>
