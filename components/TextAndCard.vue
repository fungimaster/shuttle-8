<template>
  <div class="flex flex-wrap items-center px-5">
    <div class="w-full md:w-5/12 mr-auto ml-auto">
      <div
        class="
          text-gray-600 text-center
          inline-flex
          items-center
          justify-center
          w-16
          h-16
          mb-6
          shadow-lg
          rounded-full
          bg-pink-hero
        "
      >
        <font-awesome-icon class="h-4 text-white" :icon="['far', 'heart']" />
      </div>

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
