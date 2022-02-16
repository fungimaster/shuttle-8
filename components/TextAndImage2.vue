<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div>
      <img :src="content.imgurl" alt="" />
    </div>
    <div class="mt-10 md:mt-0">
      <h1 class="headline1">
        {{ content.headline }}
      </h1>
      <p class="text">{{ content.body }}</p>
      <h3 class="headline3 pt-10" v-if="content.ending">
        {{ content.ending }}
      </h3>
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
