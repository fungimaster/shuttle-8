<template>
  <div class="text-black shadow-sm mb-1">
    <nav class="p-2 py-5 mt-0 w-full z-10 top-0">
      <div class="grid grid-cols-2 md:grid-cols-5">
        <div>
          <a
            class="no-underline hover:text-white hover:no-underline cursor-pointer"
            @click="$_handleRouting('/'), (showDropdown = false)"
          >
            <img
              class="w-full lg:w-56 md:w-30 ml-10 pt-4"
              src="https://res.cloudinary.com/dn3hzwewp/image/upload/v1674221723/SFH/site/Slag-for-hjaltar-logo-liten.png"
              alt="logo"
            />
          </a>
        </div>
        <div
          class="col-span-4 hidden lg:hidden flex w-full pt-2 content-center justify-between md:w-6/6 md:justify-end"
        >
          <ul
            class="list-reset flex justify-end flex-1 md:flex-none items-center"
          >
            <li
              v-for="route in routes"
              :key="route.index"
              class="mr-3 relative"
            >
              <div class="flex justify-center">
                <font-awesome-icon
                  v-if="isCurrentPage(route.value ? route.value : 'index')"
                  class="absolute h-5 -top-3 text-pink-hero"
                  :icon="['far', 'long-arrow-down']"
                />
                <a
                  class="px-3 py-2 flex items-center text-lg hover:opacity-75 cursor-pointer font-extralight tracking-widest text-gray-600"
                  :class="[isCurrentPage(route.value ? route.value : 'index')]"
                  @click="$_handleRouting(route.value)"
                  >{{ route.displayname }}</a
                >
              </div>
            </li>
          </ul>
        </div>

        <div class="md:block col-span-1 md:col-span-4">
          <button
            class="p-5 pb-3 float-right"
            @click="showDropdown = !showDropdown"
          >
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
      <transition name="fade">
        <DropdownMenu
          v-if="showDropdown"
          class="lgMenu"
          :class="showDropdown ? 'enter' : ''"
          :routes="routes"
          @closeMenu="showDropdown = false"
        />
      </transition>
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
        // { value: '/golf-anmalan', displayname: 'Min sida' },
        { value: '/insamlingsevent', displayname: 'Insamlingsevent' },
        { value: '/bakgrund', displayname: 'Bakgrund' },
        { value: '/hjaltar', displayname: 'Alla våra Hjältar' },
        { value: '/hjalp', displayname: 'Så hjälper du' },
        { value: '/kontakt', displayname: 'Kontakt' },
      ],
    }
  },
  computed: {
    currentPage() {
      return this.$nuxt.$route.name
    },
  },
  methods: {
    isCurrentPage(page) {
      return this.currentPage === page ? 'active' : null
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-300px);
}
</style>





