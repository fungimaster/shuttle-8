<template>
  <div class="container mx-auto px-4 md:px-16 py-20">
    <div class="flex flex-wrap">
      <div
        class="block md:hidden w-full md:w-6/12 ml-auto mr-auto px-4 md:px-16"
      >
        <img
          alt="..."
          class="max-h-full rounded-lg shadow-lg"
          :src="content.imgurl"
        />
      </div>
      <div class="w-full md:w-5/12 ml-auto mr-auto px-4 md:px-16">
        <div class="md:pr-12 pt-10 md:pt-0">
          <div
            v-if="showicon"
            class="
              text-pink-600
              p-3
              text-center
              inline-flex
              items-center
              justify-center
              w-16
              h-16
              mb-6
              shadow-lg
              rounded-full
              bg-pink-300
            "
          >
            <font-awesome-icon class="h-4" :icon="['far', 'heart']" />
          </div>
          <h3 class="text-2xl tracking-wider">
            {{ content.headline }}
          </h3>
          <p class="mt-4 text-lg leading-relaxed text-gray-600">
            {{ content.body1 }}
          </p>
          <p
            v-if="content.body2"
            class="mt-4 text-lg leading-relaxed text-gray-600 tracking-wider"
          >
            {{ content.body2 }}
          </p>
          <p
            v-if="content.body3"
            class="mt-4 text-lg leading-relaxed text-gray-600 tracking-wider"
          >
            {{ content.body3 }}
          </p>
          <p
            v-if="content.body4"
            class="mt-4 text-lg leading-relaxed text-gray-600 tracking-wider"
          >
            {{ content.body4 }}
          </p>
          <p
            v-if="content.body5"
            class="mt-4 text-lg leading-relaxed text-gray-600 tracking-wider"
          >
            {{ content.body5 }}
          </p>
          <p
            v-if="content.body6"
            class="mt-4 text-lg leading-relaxed text-gray-600 tracking-wider"
          >
            {{ content.body6 }}
          </p>
          <ul v-if="content.list" class="list-none mt-6">
            <li
              class="py-2"
              v-for="element in content.list"
              :key="element.index"
            >
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
      <div
        class="hidden md:block w-full md:w-6/12 ml-auto mr-auto px-4 md:px-16"
      >
        <img
          alt="..."
          class="max-h-full rounded-lg shadow-lg"
          :src="content.imgurl"
        />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['content', 'showicon'],
}
</script>