<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
    >
      <template #svg>
        <SvgFestivities></SvgFestivities>
      </template>
    </HeroSection>

    <div class="py-12 md:px-16 bg-gray-50" v-if="getEvents">
      <TextAndImage :content="event1" :showicon="false">
        <template #content>
          <h3 class="headline3">{{ event.eventname }}</h3>
          <h4 class="headline4">
            Bokade platser {{ event.bookedslots }} av
            {{ event.availableslots }}
          </h4>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            reiciendis dolores optio, maxime eligendi totam laborum dolor nam
            veniam dignissimos nesciunt, deleniti quasi officia reprehenderit
            error esse illum, consequatur inventore.
          </p>
          <h5 class="headline5">Insamlat: {{ event.total }} kr</h5>

          <div class="pt-5">
            <Upload :eventid="eventId"> </Upload>
          </div>
        </template>
      </TextAndImage>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  created() {
    this.eventId = this.$route.params.id
  },
  data() {
    return {
      eventId: '',
      hero: {
        headline1: 'Event',
        headline2:
          'event event event event event event event event event event ',
      },
      event1: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione itaque quas mollitia quis in aliquid sint hic ipsum vel quod eveniet nobis tempora, neque molestiae libero cupiditate rem numquam!m',
        headline: 'Utdelning',
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269554/SFH/site/slagforhjaltar-15.jpg',
      },
    }
  },
  async fetch() {
    await this.getFunds()
  },
  computed: {
    ...mapGetters('events', ['getEvents']),
    event() {
      const id = this.$route.params.id
      console.log('id', id)
      return this.$store.getters['events/getEvent'](id)
    },
  },
  methods: {
    ...mapActions('events', ['getFunds']),
  },
}
</script>

<style >
</style>
