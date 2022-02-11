<template>
  <div>
    <div class="break-words bg-white w-full mb-8">
      <div class="pb-5">
        <button class=""></button>
        <p class="text-2xl tracking-wider">
          <font-awesome-icon
            class="
              text-white
              p-1
              text-center
              inline-flex
              items-center
              justify-center
              w-8
              h-8
              shadow-lg
              rounded-full
              overflow-visible
            "
            :class="content.color"
            :icon="['far', 'heart']"
          />
          {{ content.headline }}
        </p>
        <p class="mt-2 mb-4 text-gray-600 tracking-wider">
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