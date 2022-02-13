<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
    <div>
      <img :src="content.imgurl" alt="" />
    </div>
    <div class="mt-10 md:mt-0">
      <h1 class="headline1">
        {{ content.headline }}
      </h1>
      <p class="text-gray-700 text-wider text-lg">{{ content.body }}</p>
      <h4
        class="text-pink-dark-hero text-3xl pt-10 text-wider"
        v-if="content.ending"
      >
        {{ content.ending }}
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
}
</script>


<style  scoped>
@import '@/assets/css/helper-classes.css';
</style>
