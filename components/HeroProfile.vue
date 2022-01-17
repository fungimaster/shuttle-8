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
      <div class="container mx-auto px-4">
        <div
          class="
            relative
            flex flex-col
            min-w-0
            break-words
            bg-white
            w-full
            mb-6
            shadow-xl
            rounded-lg
            -mt-64
          "
        >
          <div class="px-6">
            <div class="flex flex-wrap justify-center">
              <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div class="relative">
                  <img
                    alt="..."
                    :src="hero.imgurl"
                    class="
                      shadow-xl
                      h-full
                      align-middle
                      border-none
                      absolute
                      -m-16
                      -ml-20
                      lg:-ml-16
                    "
                    style="max-width: 350px; min-height: 150px"
                  />
                </div>
              </div>
              <div
                class="
                  w-full
                  lg:w-4/12
                  px-4
                  lg:order-3 lg:text-right lg:self-center
                "
              >
                <div class="py-6 px-3 mt-32 sm:mt-0">
                  <button
                    class="
                      bg-pink-500
                      active:bg-pink-600
                      uppercase
                      text-white
                      font-bold
                      hover:shadow-md
                      shadow
                      text-xs
                      px-4
                      py-2
                      rounded
                      outline-none
                      focus:outline-none
                      sm:mr-2
                      mb-1
                      min-w-full
                      md:min-w-max
                    "
                    type="button"
                    style="transition: all 0.15s ease 0s"
                  >
                    Gå till hemsidan
                  </button>
                </div>
              </div>
              <div class="w-full lg:w-4/12 px-4 lg:order-1"></div>
            </div>
            <div class="text-center mt-12">
              <h3
                class="
                  text-4xl
                  font-semibold
                  leading-normal
                  mb-2
                  text-gray-800
                  mb-2
                "
              >
                {{ hero.name }}
              </h3>
              <div
                class="
                  text-sm
                  leading-normal
                  mt-0
                  mb-2
                  text-gray-500
                  font-bold
                  uppercase
                "
              >
                <span>
                  <font-awesome-icon
                    class="h-4 inline"
                    :icon="['far', 'location']"
                  />
                  {{ hero.location }}
                </span>
              </div>
              <div class="mb-2 text-gray-700 mb-10">
                {{ hero.body }}
              </div>
              <div class="flex justify-center mt-5 mb-5">
                <font-awesome-icon
                  class="h-8 text-pink-dark-hero ml-3"
                  :icon="['far', 'heart']"
                />
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