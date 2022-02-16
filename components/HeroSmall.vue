<template>
  <div class="mb-12 px-8 md:px-16">
    <div class="px-6">
      <img
        alt="..."
        :src="hero.imgurl"
        class="shadow-lg rounded-full max-w-full mx-auto"
      />
      <div class="pt-6 text-center">
        <h4 class="headline4">{{ hero.name }}</h4>
        <p class="mt-1 textuppercase">
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
