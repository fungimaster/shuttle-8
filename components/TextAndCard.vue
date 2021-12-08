<template>
  <div class="flex flex-wrap items-center">
    <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
      <div
        class="
          text-gray-600
          p-3
          text-center
          inline-flex
          items-center
          justify-center
          w-16
          h-16
          mb-6
          shadow-lg
          rounded-full
          bg-gray-100
        "
      >
        <i class="fas fa-user-friends text-xl"></i>
      </div>
      <h3 class="text-3xl mb-2 font-semibold leading-normal">
        {{ headline }}
      </h3>

      <div v-if="$slots.content">
        <slot name="content"> </slot>
      </div>
    </div>
    <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
      <Card
        class="m-3"
        imgurl="https://slagforhjaltar.se/wp-content/uploads/2021/03/barncancerfonden.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['headline', 'ingress', 'imgurl'],
}
</script>


<style  scoped>
@import '@/assets/css/helper-classes.css';
</style>
