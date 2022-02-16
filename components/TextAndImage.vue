<template>
  <div class="container mx-auto px-8 md:px-16 pt-20">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div class="block md:hidden w-full md:w-6/12">
        <img alt="..." class="max-h-full shadow" :src="content.imgurl" />
      </div>
      <div class="">
        <h3 class="text-2xl tracking-wider">
          <span
            v-if="showicon"
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
        <p class="text">
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
                    w-10
                    h-10
                    shadow-lg
                    rounded-full
                    bg-pink-hero
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