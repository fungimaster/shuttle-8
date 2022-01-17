<template>
  <div class="mt-2 w-56 z-20 px-20 w-full">
    <div
      class="bg-white"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <div class="py-1">
        <div class="my-5">
          <nuxt-link to="/">
            <span class="tracking-wide text-lg"> Hem </span>
          </nuxt-link>
          <hr class="text-black w-full mt-5" />
        </div>
        <div class="my-5">
          <nuxt-link to="/insamlingsevent" @click.native="closeMenu">
            <span class="tracking-wide text-lg"> Insamlingsevent </span>
          </nuxt-link>
          <hr class="text-black w-full mt-5" />
        </div>
        <div class="my-5">
          <nuxt-link to="/bakgrund" @click.native="closeMenu">
            <span class="tracking-wide text-lg"> Bakgrund </span>
          </nuxt-link>
          <hr class="text-black w-full mt-5" />
        </div>
        <div class="my-5">
          <nuxt-link to="/hjalp" @click.native="closeMenu">
            <span class="tracking-wide text-lg"> Så hjälper du</span>
          </nuxt-link>
          <hr class="text-black w-full mt-5" />
        </div>
        <div class="my-5">
          <nuxt-link to="/hjaltar" @click.native="closeMenu">
            <span class="tracking-wide text-lg"> Hjältar </span>
          </nuxt-link>
          <hr class="text-black w-full mt-5" />
        </div>
        <div class="my-5">
          <nuxt-link to="/kontakt" @click.native="closeMenu">
            <span class="tracking-wide text-lg"> Kontakt </span>
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
  mixins: [utilityMethodsMixin],

  methods: {
    closeMenu() {
      this.$emit('closeMenu')
    },
  },
}
</script>
