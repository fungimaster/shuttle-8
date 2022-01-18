<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
    <div>
      <img :src="content.imgurl" alt="" />
    </div>
    <div class="px-4 relative">
      <div class="absolute md:-ml-32 -mt-32 md:mt-32">
        <h2 class="text-pink-hero">
          {{ content.headline }}
        </h2>
        <p class="text-pink-hero font-extrabold text-lg">{{ content.body }}</p>
        <h1 class="headline2 text-pink-dark-hero pt-24" v-if="content.ending">
          {{ content.ending }}
        </h1>
      </div>
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

h2 {
  font-size: 5rem;
  word-break: break-word;
  font-weight: 800;
}
</style>
