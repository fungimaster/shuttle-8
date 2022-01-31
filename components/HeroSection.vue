<template>
  <div
    class="
      relative
      pt-16
      pb-16
      flex
      content-center
      items-center
      md:min-h-screen
      flex
      align-top
    "
  >
    <div
      class="
        absolute
        top-0
        w-full
        h-full
        md:h-full
        border-t-4 border-b-4 border-pink-dark-hero
        bg-pink-dark-hero
      "
    ></div>
    <div
      :style="'background-image: url(' + imgurl + ')'"
      class="
        hidden
        md:block
        w-8/12
        h-5/6
        bg-cover
        md:right-0 md:top-14
        absolute
      "
    ></div>
    <div class="container relative mx-auto py-52 md:py-0">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-12/12 px-4 ml-auto mr-auto">
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
                  Slag för hjältar
                </h1>
              </div>
            </section>
            <section class="md:w-3/12">
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