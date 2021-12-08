<template>
  <div>
    <nav class="p-2 mt-0 w-full z-10 top-0">
      <div class="container mx-auto flex items-center">
        <div
          class="
            flex
            w-full
            md:w-1/2
            justify-center
            md:justify-start
            text-black
            font-extrabold
          "
        >
          <a
            class="text-black no-underline hover:text-white hover:no-underline"
            href="#"
          >
            <img
              class="w-1/2 md:w-80"
              src="https://slagforhjaltar.se/wp-content/uploads/2021/03/Slag-for-hjaltar-logo-liten.png"
              alt="logo"
            />
          </a>
        </div>
        <div
          class="
            hidden
            md:block
            flex
            w-full
            pt-2
            content-center
            justify-between
            md:w-1/2 md:justify-end
          "
        >
          <ul
            class="
              list-reset
              flex
              justify-between
              flex-1
              md:flex-none
              items-center
            "
          >
            <li class="mr-3">
              <a
                class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-black
                  hover:opacity-75
                  cursor-pointer
                "
                @click="$_handleRouting('/')"
                :class="[isCurrentPage('index')]"
                >Active</a
              >
            </li>
            <li class="mr-3">
              <a
                class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-black
                  hover:opacity-75
                  cursor-pointer
                "
                :class="[isCurrentPage('insamlingsevent')]"
                @click="$_handleRouting('/insamlingsevent')"
                >Insamlingsevent</a
              >
            </li>
            <li class="mr-3">
              <a
                class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-black
                  hover:opacity-75
                  cursor-pointer
                "
                href="#"
                >link</a
              >
            </li>
            <li class="mr-3">
              <a
                class="
                  px-3
                  py-2
                  flex
                  items-center
                  text-xs
                  uppercase
                  font-bold
                  leading-snug
                  text-black
                  hover:opacity-75
                  cursor-pointer
                "
                s
                href="#"
                >link</a
              >
            </li>
          </ul>
        </div>
        <div class="md:hidden">
          <DropdownMenu />
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
import { utilityMethodsMixin } from '@/plugins/mixins/utilityMethodsMixin'

export default {
  name: 'Navbar',
  mixins: [utilityMethodsMixin],

  data() {
    return {
      active: false,
    }
  },

  methods: {
    isCurrentPage(page) {
      return this.currentPage === page ? 'active' : null
    },
  },

  computed: {
    currentPage() {
      return this.$nuxt.$route.name
    },
  },
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alice&display=swap');

.active {
  color: #c30075;
}
</style>


