<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-1">
    <div>
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80"
        alt=""
      />
    </div>
    <div class="px-4 relative">
      <div class="absolute md:-ml-32 -mt-32 md:mt-0">
        <h2 class="text-pink-dark-hero sm:text-green-600">
          Jag är ovan på bilden
        </h2>

        <div v-if="$slots.content">
          <slot name="content"> </slot>
        </div>
      </div>
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

h2 {
  font-size: 5rem;
  word-break: break-word;
  font-weight: 800;
}
</style>
