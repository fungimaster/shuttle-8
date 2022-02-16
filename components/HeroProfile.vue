<template>
  <div>
    <section class="relative block" style="height: 200px">
      <div class="absolute top-0 w-full h-full bg-center bg-cover">
        <span
          id="blackOverlay"
          class="w-full h-full absolute bg-pink-hero"
        ></span>
      </div>
      <div
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
      ></div>
    </section>
    <section class="relative py-16 border-2 border-pink-hero">
      <div class="container mx-auto px-8 md:px-8">
        <div
          class="
            relative
            flex flex-col
            min-w-0
            break-words
            bg-white
            w-full
            shadow-xl
            rounded-lg
            -mt-64
            h-96
          "
        >
          <div class="px-3">
            <div class="flex flex-wrap justify-center h-40">
              <div class="w-full md:w-12/12 px-8 md:px-16 flex justify-center">
                <img
                  alt="..."
                  :src="hero.imgurl"
                  class="
                    shadow-xl
                    align-middle
                    border-none
                    object-contain
                    pt-10
                    overflow-hidden
                  "
                />
              </div>
            </div>
            <div class="w-full flex justify-center mt-5"></div>

            <div class="text-center mt-4">
              <h4 class="headline4 mb-5">
                {{ hero.name }}
              </h4>
              <div class="mt-0 mb-2 text uppercase">
                <span>
                  <font-awesome-icon
                    class="h-4 inline"
                    :icon="['far', 'location']"
                  />
                  {{ hero.location }}
                </span>
              </div>
              <!--    <div class="mb-2 text-gray-700 mb-10">
                {{ hero.body }}
              </div> -->
              <div class="flex justify-center mt-5 mb-5">
                <button
                  class="
                    bg-pink-500
                    active:bg-pink-600
                    uppercase
                    text-white
                    hover:shadow-md
                    shadow
                    text-xs
                    px-8
                    md:px-16
                    py-2
                    rounded
                    outline-none
                    focus:outline-none
                    sm:mr-2
                    mb-1
                    md:min-w-max
                  "
                  type="button"
                  style="transition: all 0.15s ease 0s"
                >
                  <span>
                    <font-awesome-icon
                      class="h-4 text-white inline"
                      :icon="['far', 'heart']"
                  /></span>
                  Gå till hemsidan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  props: ['hero'],
}
</script>