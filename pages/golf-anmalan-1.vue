<template>
  <div>
    <div
      class="container mx-auto relative pb-1 md:py-10 grid gap-5 grid-cols-1 place-content-center px-8 md:px-16 py-10"
    >
      <h1
        class="text-center md:text-left leading-normal md:text-6xl text-pink-hero text-4xl tracking-wider break-words"
      >
        {{ hero.headline1 }}
      </h1>
      <p class="text">{{ hero.headline2 }}</p>
      <p v-if="event && event.eventinfo" class="text">
        {{ event.eventinfo }}
      </p>
      <div v-if="event">
        <p
          v-if="event.bookedslots && event.availableslots"
          class="text-left leading-normal text-pink-hero text-xl tracking-wider break-words"
        >
          Bokade platser {{ event.bookedslots }} av
          {{ event.availableslots }}
        </p>

        <h5
          v-if="event.total"
          class="text-left leading-normal text-pink-hero text-xl tracking-wider break-words"
        >
          Insamlat: {{ event.total }} kr
        </h5>
      </div>
    </div>

    <div class="container mx-auto px-8 md:px-16 pt-2">
      <div class="grid grid-cols-1 md:grid-cols-1 gap-10 mt-2">
        <NewTeam />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async fetch() {
    await this.getFunds()
  },
  computed: {
    ...mapGetters('events', ['getEvents']),
    event() {
      return this.$store.getters['events/getEvent']('fh66o99rZPkTQp8QF')
    },
  },
  data() {
    return {
      hero: {
        headline1: 'Anmälan golf 2023',
        headline2:
          'Kul att ni vill vara med i årets tävling på Allerum GK fredagen den 26 maj. Fyll i alla fält i formuläret nedan och skicka in, se till att alla uppgifter stämmer :)',
      },
      list: ['kärlek', 'glädje', 'gemenskap', 'engagemang'],
    }
  },

  methods: {
    ...mapActions('events', ['getFunds']),
  },
}
</script>

<style >
* {
  font-family: 'Open Sans', Arial, sans-serif;
}
p {
  color: #666;
}
h6 {
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 1px;
  color: #666;
}

label {
  padding-bottom: 0.25em !important;
}
</style>
