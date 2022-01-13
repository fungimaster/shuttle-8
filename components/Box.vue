<template>
  <div class="w-full md:w-4/12 px-4 text-center">
    <div
      class="
        relative
        flex flex-col
        min-w-0
        break-words
        bg-white
        w-full
        mb-8
        shadow-lg
        rounded-lg
      "
    >
      <div class="px-4 py-5 flex-auto">
        <button
          class="
            text-white
            p-3
            text-center
            inline-flex
            items-center
            justify-center
            w-12
            h-12
            mb-5
            shadow-lg
            rounded-full
          "
          :class="content.color"
        >
          <font-awesome-icon class="h-4" :icon="['far', 'heart']" />
        </button>
        <h6 class="text-xl font-semibold">{{ content.headline }}</h6>
        <p class="mt-2 mb-4 text-gray-600">
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