<template>
  <div>
    <div class="break-words bg-white w-full mb-8">
      <div class="px-4 py-10">
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
        <p class="text-2xl tracking-wider">{{ content.headline }}</p>
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