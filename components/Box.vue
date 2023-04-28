<template>
  <div>
    <div class="break-words bg-white w-full mb-8">
      <div
        class="p-5 cursor-pointer"
        @click="$_handleRouting(content.route, content.external)"
      >
        <button class=""></button>
        <h3 class="headline3 md:text-sm lg:text-2xl">
          <span
            class="w-10 h-10 shadow-lg rounded-full bg-pink-dark-hero inline-flex items-center justify-center"
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
          <span v-if="content2" class="text">
            Insamlat totalt
            <strong class="text-pink-dark-hero">{{ content2 }}.</strong>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import { utilityMethodsMixin } from '@/plugins/mixins/utilityMethodsMixin'
export default {
  mixins: [utilityMethodsMixin],
  props: ['content', 'content2'],
}
</script>