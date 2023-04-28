<template>
  <div class="container mx-auto px-8 md:px-16 pt-5">
    <div v-if="content.list" class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        v-for="element in content.list"
        :key="element.index"
        class="text-center"
      >
        <div
          class="flex items-center justify-center py-10 border-dashed border-4 rounded border-pink-hero"
        >
          <div>
            <span
              class="w-10 h-10 shadow-lg rounded-full heart-bg inline-flex items-center justify-center mr-2"
            >
              <font-awesome-icon
                class="w-7 h-7 text-white overflow-visible"
                :icon="['far', 'heart']"
              />
            </span>
          </div>
          <div>
            <h4 class="text-gray-600 uppercase">{{ element }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['content', 'showicon'],
}
</script>