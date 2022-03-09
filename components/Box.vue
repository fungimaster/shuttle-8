<template>
  <div>
    <div class="break-words bg-white w-full mb-8">
      <div class="p-5">
        <button class=""></button>
        <h3 class="headline3">
          <span
            class="
              w-10
              h-10
              shadow-lg
              rounded-full
              bg-pink-dark-hero
              inline-flex
              items-center
              justify-center
            "
          >
            <font-awesome-icon
              class="w-7 h-7 text-white overflow-visible"
              :icon="['far', 'heart']"
            />
          </span>
          {{ content.headline }}
        </h3>
        <p class="mt-2 text">
          {{ content.text }}
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['content'],
}
</script>