
   
<template>
  <footer
    class="
      relative
      text-pink-dark-hero
      pt-8
      pb-6
      pt-28
      border-t-4 border-pink-hero
      mt-10
    "
  >
    <div class="container mx-auto px-8 md:px-16">
      <div class="grid grid-cols-1">
        <h4 class="headline4">Kontakt</h4>

        <a href="mailto:info@slagforhjaltar.se">
          <span class="text">info@slagforhjaltar.se </span></a
        >

        <h4 class="mt-6 headline4">Adress</h4>
        <span class="text"> Adress: Rååvägen 39 25270 Råå </span>
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
              $_handleRouting('https://www.facebook.com/slagforhjaltar/', true)
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

