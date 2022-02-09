<template>
  <div class="flex flex-wrap items-center px-4 md:px-16">
    <div class="w-full md:w-5/12 mr-auto ml-auto">
      <div v-if="$slots.content">
        <slot name="content"> </slot>
      </div>
    </div>
    <div class="w-full md:w-4/12 mr-auto ml-auto">
      <Card class="m-3" :content="content" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['headline', 'ingress', 'content'],
}
</script>


<style  scoped>
@import '@/assets/css/helper-classes.css';
</style>
