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

    <div class="container mx-auto px-8 md:px-16 md:pt-20">
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10">
        <div v-if="eventId">
          <h5 class="headline5">Event if from url-param: {{ eventId }}</h5>

          <Upload :eventid="eventId"> </Upload>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created() {
    this.eventId = this.$route.params.id
    const promise = this.fetchTestData()

    promise.then(() => {
      console.log('PROMISE RESOLVED')
    })
  },
  data() {
    return {
      eventId: '',
      hero: {
        headline1: 'Event',
        headline2:
          'event event event event event event event event event event ',
      },
    }
  },
  methods: {
    ...mapActions('events', ['fetchTestData']),
  },
}
</script>

<style >
</style>
