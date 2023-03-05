<template>
  <div class="container mx-auto px-8 md:px-16 pt-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="block md:hidden w-full md:w-6/12">
        <img alt="..." class="max-h-full shadow" :src="content.imgurl" />
      </div>
      <div class="">
        <div v-if="$slots.content">
          <slot name="content"> </slot>
        </div>

        <ul v-if="content.list" class="list-none mt-6">
          <li v-for="element in content.list" :key="element.index" class="py-2">
            <div class="flex items-center">
              <div>
                <span
                  class="
                    w-10
                    h-10
                    shadow-lg
                    rounded-full
                    heart-bg
                    inline-flex
                    items-center
                    justify-center
                    mr-2
                  "
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
          </li>
        </ul>
      </div>
      <div class="hidden md:block">
        <img alt="..." class="max-h-full shadow" :src="content.imgurl" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['content', 'showicon'],
}
</script>