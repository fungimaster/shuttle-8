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
          <nuxt-link to="/insamlingsevent">
            <span class="tracking-wide text-lg"> Insamlingsevent </span>
          </nuxt-link>
          <hr class="text-black w-full mt-5" />
        </div>
        <div class="my-5">
          <nuxt-link to="/">
            <span class="tracking-wide text-lg"> Hem </span>
          </nuxt-link>
          <hr class="text-black w-full mt-5" />
        </div>
        <div class="my-5">
          <nuxt-link to="/">
            <span class="tracking-wide text-lg"> Hem </span>
          </nuxt-link>
          <hr class="text-black w-full mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { createPopper } from '@popperjs/core'

import { utilityMethodsMixin } from '@/plugins/mixins/utilityMethodsMixin'

export default {
  mixins: [utilityMethodsMixin],

  data() {
    return {
      isMenuOpen: false,

      dropdownPopoverShow: false,
    }
  },

  methods: {
    isCurrentPage(page) {
      return this.currentPage === page ? 'active' : null
    },
    toggleDropdown() {
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false
      } else {
        this.dropdownPopoverShow = true
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: 'bottom-start',
        })
      }
    },
  },
}
</script>
