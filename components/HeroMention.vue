

<template>
  <div
    class="
      bg-teal-100
      border-t-4 border-pink-dark-hero
      rounded-b
      text
      px-8
      md:px-16
      py-3
      shadow-md
    "
    role="alert"
  >
    <div class="flex">
      <div class="py-1">
        <font-awesome-icon
          class="h-8 text-pink-dark-hero ml-3"
          :icon="['far', 'heart']"
        />
      </div>
      <div class="pl-10">
        <a class="headline4">{{ hero.name }}</a>
        <p class="text">{{ hero.body.slice(0, 30) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['hero'],
}
</script>
