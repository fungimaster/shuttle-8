
   
<template>
  <footer
    class="
      relative
      text-pink-dark-hero
      pt-8
      pb-6
      pt-28
      border-t-4 border-pink-dark-hero
    "
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4">
          <h4 class="text-3xl font-semibold">Kontakt</h4>

          <a href="mailto:info@slagforhjaltar.se">
            <h5 class="text-lg mt-0 mb-2 text-gray-600">
              info@slagforhjaltar.se
            </h5></a
          >

          <h4 class="mt-6 text-3xl font-semibold">Adress</h4>
          <h5 class="text-lg mt-0 mb-2 text-gray-600">
            Adress: Rååvägen 39 25270 Råå
          </h5>
          <div class="mt-6">
            <button
              @click="
                $_handleRouting(
                  'https://www.linkedin.com/company/slagforhjaltar/',
                  true
                )
              "
              class="
                bg-white
                text-blue-400
                shadow-lg
                font-normal
                h-10
                w-10
                items-center
                justify-center
                align-center
                rounded-full
                outline-none
                focus:outline-none
                mr-2
                p-3
              "
              type="button"
            >
              <client-only>
                <font-awesome-icon
                  class="inline pb-3"
                  :icon="['fab', 'linkedin']"
                />
              </client-only></button
            ><button
              @click="
                $_handleRouting(
                  'https://www.facebook.com/slagforhjaltar/',
                  true
                )
              "
              class="
                bg-white
                text-blue-600
                shadow-lg
                font-normal
                h-10
                w-10
                items-center
                justify-center
                align-center
                rounded-full
                outline-none
                focus:outline-none
                mr-2
                p-3
              "
              type="button"
              href="https://www.facebook.com/slagforhjaltar/"
            >
              <client-only>
                <font-awesome-icon
                  class="inline pb-3"
                  :icon="['fab', 'facebook']"
                />
              </client-only>
            </button>
          </div>
        </div>
      </div>
      <hr class="my-6 text-gray-3000" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-400 font-semibold py-1">
            Copyright © {{ date }} COLBURN COLLABORATION AB.
            <a
              href="https://colburn.se"
              class="text-gray-400 hover:text-gray-900"
              >Colburn</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { utilityMethodsMixin } from '@/plugins/mixins/utilityMethodsMixin'

export default {
  mixins: [utilityMethodsMixin],

  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>

