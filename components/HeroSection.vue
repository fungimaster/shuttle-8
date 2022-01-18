<template>
  <div
    class="
      relative
      pt-16
      pb-16
      flex
      content-center
      items-center
      justify-center
      min-h-screen
    "
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
              <div v-if="!isIndex">
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
              </div>
              <div v-else>
                <h1
                  class="
                    text-5xl
                    md:text-7xl
                    font-bold
                    text-white
                    uppercase
                    pb-2
                  "
                >
                  Slag för
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="43.883px"
                    height="43.883px"
                    viewBox="0 0 33.883 33.883"
                    style="
                      enable-background: new 0 0 33.883 33.883;
                      display: inline;
                    "
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        fill="#eee"
                        d="M20.855,33.883H3.151c-1.619,0-2.932-1.313-2.932-2.935V10.049C0.219,9,0.778,8.032,1.686,7.51l12.326-7.117
		c1.402-0.811,3.197-0.329,4.006,1.072c0.811,1.4,0.329,3.197-1.073,4.008l-6.03,3.48h19.813c1.621,0,2.936,1.313,2.936,2.934
		c0,1.619-1.314,2.933-2.936,2.933H18.413v0.44h2.641c1.619,0,2.933,1.312,2.933,2.933c0,1.62-1.312,2.934-2.933,2.934h-2.641v0.439
		h2.641c1.619,0,2.933,1.313,2.933,2.934c0,1.619-1.312,2.934-2.933,2.934h-2.641v0.587h2.442c1.619,0,2.935,1.313,2.935,2.934
		C23.79,32.572,22.475,33.883,20.855,33.883z"
                      />
                    </g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                    <g></g>
                  </svg>
                  hjältar
                  <svg
                    width="43.883px"
                    height="43.883px"
                    viewBox="-32 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    style="
                      enable-background: new 0 0 33.883 33.883;
                      display: inline;
                    "
                  >
                    <path
                      fill="#eee"
                      d="M408 216c-22.092 0-40 17.909-40 40h-8v-32c0-22.091-17.908-40-40-40s-40 17.909-40 40v32h-8V48c0-26.51-21.49-48-48-48s-48 21.49-48 48v208h-13.572L92.688 78.449C82.994 53.774 55.134 41.63 30.461 51.324 5.787 61.017-6.356 88.877 3.337 113.551l74.765 190.342-31.09 24.872c-15.381 12.306-19.515 33.978-9.741 51.081l64 112A39.998 39.998 0 0 0 136 512h240c18.562 0 34.686-12.77 38.937-30.838l32-136A39.97 39.97 0 0 0 448 336v-80c0-22.091-17.908-40-40-40z"
                    />
                  </svg>
                </h1>
              </div>
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
  props: ['isIndex', 'headline1', 'headline2', 'color', 'imgurl', 'imgurl2'],
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