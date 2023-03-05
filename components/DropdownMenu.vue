<template>
  <div class="z-20 py-20 px-20 w-full md:w-1/2">
    <div
      class="bg-white"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <div class="py-1">
        <button class="p-5 pb-3" @click="showDropdown = !showDropdown">
          <div id="nav-icon2 open">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div v-for="(route, index) in routes" :key="route.index" class="my-5">
          <a @click="$_handleRouting(route.value), closeMenu()">
            <span class="tracking-wide text-lg block">
              {{ route.displayname }}
            </span>
          </a>
          <hr v-if="index + 1 < routes.length" class="text-black w-full mt-5" />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { utilityMethodsMixin } from '@/plugins/mixins/utilityMethodsMixin'

export default {
  mixins: [utilityMethodsMixin],
  props: ['routes'],
  data() {
    return {
      showDropdown: true,
    }
  },

  methods: {
    closeMenu() {
      this.$emit('closeMenu')
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

