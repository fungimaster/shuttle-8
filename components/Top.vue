<template>
  <div class="text-black shadow-sm mb-1">
    <nav class="p-2 py-5 mt-0 w-full z-10 top-0">
      <div class="container mx-auto flex items-center">
        <div class="flex w-full md:w-1/2 justify-start font-extrabold">
          <a
            class="no-underline pl-10 hover:text-white hover:no-underline"
            @click="$_handleRouting('/'), (showDropdown = false)"
          >
            <img
              class="w-1/2 md:w-50"
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
            md:w-6/6 md:justify-end
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
            <li
              class="mr-3 relative"
              v-for="route in routes"
              :key="route.index"
            >
              <div class="flex justify-center">
                <font-awesome-icon
                  v-if="isCurrentPage(route.value ? route.value : 'index')"
                  class="absolute h-5 -top-3 text-pink-hero"
                  :icon="['far', 'long-arrow-down']"
                />

                <a
                  class="
                    px-3
                    py-2
                    flex
                    items-center
                    text-lg
                    hover:opacity-75
                    cursor-pointer
                    font-extralight
                    tracking-widest
                    text-gray-600
                  "
                  @click="$_handleRouting(route.value)"
                  :class="[isCurrentPage(route.value ? route.value : 'index')]"
                  >{{ route.displayname }}</a
                >
              </div>
            </li>
          </ul>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-6/12 md:w-4/12 px-8 md:px-16"></div>
        </div>
        <div class="md:hidden">
          <button @click="showDropdown = !showDropdown" class="p-5 pb-3">
            <div id="nav-icon1" :class="showDropdown ? 'open' : ''">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div id="nav-icon2" :class="showDropdown ? 'open' : ''">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
    <div>
      <DropdownMenu
        v-if="showDropdown"
        class="lgMenu"
        :class="showDropdown ? 'enter' : ''"
        @closeMenu="showDropdown = false"
        :routes="routes"
      />
    </div>
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
      showDropdown: false,
      routes: [
        { value: '/', displayname: 'Hem' },
        { value: 'insamlingsevent', displayname: 'Insamlingsevent' },
        { value: 'bakgrund', displayname: 'Bakgrund' },
        { value: 'hjaltar', displayname: 'Alla våra Hjältar' },
        { value: 'hjalp', displayname: 'Så hjälper du' },
        { value: 'kontakt', displayname: 'Kontakt' },
      ],
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

/* .active {
  color: #c30075;
} */

#nav-icon1,
#nav-icon2,
#nav-icon3,
#nav-icon4 {
  width: 24px;
  height: 16px;
  position: relative;

  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon1 span,
#nav-icon3 span,
#nav-icon4 span {
  display: block;
  position: absolute;

  height: 2.5px;
  width: 100%;
  background: black;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon1 span:nth-child(1) {
  top: 0px;
}

#nav-icon1 span:nth-child(2) {
  top: 10px;
}

#nav-icon1 span:nth-child(3) {
  top: 20px;
}

#nav-icon1.open span:nth-child(1) {
  top: 10px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

#nav-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -20px;
}

#nav-icon1.open span:nth-child(3) {
  top: 10px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}

/* .lgMenu {
  top: 0;
  left: -400px;
  overflow: hidden;

  position: absolute;
  z-index: 11;
  opacity: 0;
  transition: all 5s;
  -webkit-transition: all 5s;
}

.lgMenu.enter {
  opacity: 1;
  left: 0;
} */
</style>





