<template>
  <div
    class="relative pt-16 pb-16 flex content-center items-center justify-center"
    style="min-height: 75vh"
  >
    <div
      class="
        absolute
        top-0
        w-full
        h-full
        border-t-4 border-b-4 border-pink-dark-hero
        bg-pink-dark-hero
      "
    >
      <div
        :style="'background-image: url(' + imgurl + ')'"
        class="
          bg-red
          h-52
          w-52
          md:w-80 md:h-80
          bg-center bg-cover
          top-44
          left-60
          md:left-1/2 md:top-32
          absolute
        "
      ></div>
    </div>
    <div class="container relative mx-auto">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto">
          <div class="pr-12">
            <section class="w-full md:w-12/12">
              <h1 v-for="word in headline(headline1)" :key="word.index">
                <h1
                  class="
                    text-6xl
                    md:text-7xl
                    font-bold
                    text-white
                    uppercase
                    pb-2
                    break-all
                  "
                >
                  {{ word }}
                </h1>
              </h1>

              <p class="text-white">{{ headline2 }}</p>
            </section>
          </div>
          <div v-if="$slots.buttons" class="mt-24 text-center">
            <slot name="buttons"> </slot>
          </div>
        </div>
      </div>
      <div
        v-if="imgurl2"
        class="
          block
          md:hidden
          -mt-16
          h-40
          w-80
          bg-contain bg-no-repeat bg-right-bottom
        "
        :style="'background-image: url(' + imgurl2 + ')'"
      ></div>
    </div>
    <!--     <div
      class="
        top-auto
        bottom-0
        left-0
        right-0
        w-full
        absolute
        pointer-events-none
        overflow-hidden
      "
      style="height: 70px"
    >
      <svg
        :class="color"
        class="absolute bottom-0 overflow-hidden"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          :class="color"
          class="fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div> -->
  </div>
</template>


<script>
export default {
  props: ['headline1', 'headline2', 'color', 'imgurl', 'imgurl2'],
  methods: {
    headline(headline) {
      return headline.split(' ')
    },
  },
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

h1 {
  font-family: 'Poppins', sans-serif;
}
</style>