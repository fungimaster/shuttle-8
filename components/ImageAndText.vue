<template>
  <div class="container mx-auto px-8 md:px-16 pt-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <img alt="..." class="max-h-full shadow" :src="content.imgurl" />
      <div class="md:pr-12 pt-10 md:pt-0">
        <h3 class="headline3">
          <span
            class="
              w-10
              h-10
              shadow-lg
              rounded-full
              bg-pink-hero
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
        <p class="mt-4 text">
          {{ content.body1 }}
        </p>
        <p v-if="content.body2" class="mt-4 text">
          {{ content.body2 }}
        </p>
        <p v-if="content.body3" class="mt-4 text">
          {{ content.body3 }}
        </p>
        <p v-if="content.body4" class="mt-4 text">
          {{ content.body4 }}
        </p>
        <p v-if="content.body5" class="mt-4 text">
          {{ content.body5 }}
        </p>
        <p v-if="content.body6" class="mt-4 text">
          {{ content.body6 }}
        </p>
        <ul v-if="content.list" class="list-none mt-6">
          <li class="py-2" v-for="element in content.list" :key="element.index">
            <div class="flex items-center">
              <div>
                <span
                  class="
                    text-xs
                    font-semibold
                    inline-block
                    py-1
                    px-2
                    uppercase
                    rounded-full
                    text-pink-600
                    bg-pink-200
                    mr-3
                  "
                >
                  <font-awesome-icon class="h-4" :icon="['far', 'heart']" />
                </span>
              </div>
              <div>
                <h4 class="text-gray-600 uppercase">{{ element }}</h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['content'],
}
</script>