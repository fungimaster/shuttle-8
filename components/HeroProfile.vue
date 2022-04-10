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
      <div class="container mx-auto px-8 md:px-8 flex flex-col align-middle">
        <div
          class="
            relative
            flex flex-col
            min-w-0
            break-words
            w-full
            rounded-lg
            -mt-64
            h-40
            align-middle
          "
        >
          <img
            alt="..."
            :src="hero.imgurl"
            class="border-none object-contain overflow-hidden"
          />
        </div>
      </div>
      <div class="flex justify-center">
        <button
          class="
            bg-pink-500
            active:bg-pink-600
            uppercase
            text-white
            hover:shadow-md
            shadow
            text-xs
            px-2
            md:px-8
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
          @click="$_handleRouting(hero.url, true)"
        >
          <span>
            <font-awesome-icon
              class="h-4 text-white inline"
              :icon="['far', 'heart']"
          /></span>
          {{ hero.name }}
        </button>
      </div>
    </section>
  </div>
</template>


<script>
import { utilityMethodsMixin } from '@/plugins/mixins/utilityMethodsMixin'

export default {
  mixins: [utilityMethodsMixin],

  props: ['hero'],
}
</script>
