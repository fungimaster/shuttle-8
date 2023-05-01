<template>
  <div>
    <!-- <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
    >
      <template #svg>
        <SvgFestivities></SvgFestivities>
      </template>
    </HeroSection> -->

    <div v-if="event" class="py-12 md:px-16 bg-gray-25">
      <TextAndImage :content="event1" :showicon="false">
        <template #content>
          <h3 class="headline3">{{ event.eventname }}</h3>
          <h4 class="headline4">
            Bokade platser {{ event.bookedslots }} av
            {{ event.availableslots }}
          </h4>
          <p class="text">
            {{ event.eventinfo }}
          </p>
          <h5 class="headline5">Insamlat: {{ event.total }} kr</h5>

          <div class="pt-5">
            <Upload :eventid="eventId"> </Upload>
          </div>
        </template>
      </TextAndImage>
    </div>

    <div class="container mx-auto px-8 md:px-16 pt-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10"></div>
      <div>
        <CoolLightBox :items="photos" :index="index" @close="index = null">
        </CoolLightBox>
        <h3 class="headline3">Bilder från våra härliga deltagare</h3>
        <div
          class="grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2"
        >
          <div
            v-for="(image, imageIndex) in photos"
            :key="imageIndex"
            class="w-full col-span-1 row-span-1 rounded"
          >
            <img
              :src="formatImage(image.url)"
              class="object-contain"
              @click="index = imageIndex"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    CoolLightBox,
  },
  data() {
    return {
      index: null,
      eventId: '',
      photos: [],
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
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto,w_800/v1647269554/SFH/site/slagforhjaltar-15.jpg',
      },
    }
  },
  async fetch() {
    await this.getFunds()
    await this.getPhotos()
  },
  created() {
    this.eventId = this.$route.params.id
  },
  computed: {
    ...mapGetters('events', ['getEvents']),
    event() {
      const id = this.$route.params.id
      // console.log('id', id)
      // const theEvent = this.$store.getters['events/getEvent'](id)
      // this.hero.headline1 = theEvent.eventname
      // this.hero.headline1 = theEvent.eventname
      return this.$store.getters['events/getEvent'](id)
    },
  },
  methods: {
    ...mapActions('events', ['getFunds']),
    getPhotos() {
      this.$axios
        .$post(this.$config.baseURL, {
          method: 'getEventImage',
          event_id: 'fh66o99rZPkTQp8QF',
        })
        .then((response) => {
          console.log(response)
          this.photos = response
        })
        .catch((error) => {
          console.log(error)
          // this.loading = false;
        })
    },
    formatImage(image) {
      console.log(image)
      const firstUrl = image.split('/upload/').pop()

      return (
        'https://res.cloudinary.com/dn3hzwewp/image/upload/w_500,g_auto,c_fill/' +
        firstUrl
      )
    },
  },
}
</script>

<style >
</style>
