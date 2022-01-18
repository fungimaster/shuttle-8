<template>
  <div class="mt-2 w-56 z-20 px-20 w-full">
    <div
      class="bg-white"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <div class="py-1">
        <div class="my-5" v-for="route in routes" :key="route.index">
          <nuxt-link :to="route.value" @click.native="closeMenu">
            <span class="tracking-wide text-lg block">
              {{ route.displayname }}
            </span>
          </nuxt-link>
          <hr class="text-black w-full mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { utilityMethodsMixin } from '@/plugins/mixins/utilityMethodsMixin'

export default {
  props: ['routes'],
  mixins: [utilityMethodsMixin],

  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    },
  },
}
</script>
