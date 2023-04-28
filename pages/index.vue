<template>
  <div class="">
    <client-only>
      <HeroSection
        :is-index="true"
        :headline1="hero.headline1"
        :headline2="hero.headline2"
        color="text-white"
      >
        <template #svg>
          <SvgSpreadLove />
        </template>

        <template #buttons>
          <div class="flex mb-4"></div>
          <div class="md:flex">
            <button
              class="hidden btn-pill w-full md:w-1/2 btn-lg bg-white"
              type="button"
              @click="$_handleRouting('/golf-anmalan')"
            >
              Anmälan golf
            </button>
            <button hidden class="btn-pill btn-lg bg-white" type="button">
              Ge en gåva
            </button>
            <!-- <button
              class="btn-pill w-full md:w-1/2 btn-lg bg-white mt-5 md:mt-0 md:ml-10"
              type="button"
            >
              Läs mer om oss
            </button> -->
          </div>
        </template>
      </HeroSection>

      <div class="pb-20 pt-0 md:pt-0 py-20">
        <div class="container mx-auto px-8 md:px-16">
          <div class="flex flex-wrap">
            <Box class="w-full md:w-4/12 pr-5" :content="box1" />
            <Box
              class="w-full md:w-4/12 pr-5"
              :content="box2"
              :content2="getFundsTotal"
            />
            <Box class="w-full md:w-4/12 pr-5" :content="box3" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10 mb-10">
            <Stats class="py-10 mt-5" :content="stats1" />
            <Stats class="py-10 mt-5" :content="stats2" />
            <Stats class="py-10 mt-5" :content="stats3" />
          </div>
          <Gallery />
        </div>
      </div>

      <div class="py-12 px4 md:px-16 bg-gray-50">
        <TextAndCard
          :ingress="event1.ingress"
          :headline="event1.headline"
          :content="event1"
        >
          <template #content>
            <h3 class="headline3">
              <span
                class="w-10 h-10 shadow-lg rounded-full heart-bg inline-flex items-center justify-center"
              >
                <font-awesome-icon
                  class="w-7 h-7 text-white overflow-visible"
                  :icon="['far', 'heart']"
                />
              </span>

              Så hjälper vi
            </h3>
            <p class="text">
              Stiftelsens engagerade arbete ska hjälpa barn och unga med behov
              av stöd på olika vis. Stiftelsen arbetar genom att arrangera och
              genomföra insamlingsevent och skänker sedan vidare 100% av
              insamlade medel till organisationer som arbetar med att stötta
              barn och unga. Hittills har nedan organisationer mottagit
              donationer genom Slag för Hjältar:
            </p>
            <p class="text">
            <ul>
              <li>Barncancerfonden Södra</li>
              <li>Ellas Hjältar</li>
              <li>Jontefonden</li>
              <li>Nätverket Prosit</li>
              <li>Barndiabetesfonden</li>
            </ul>
            </p>
          </template>
        </TextAndCard>
      </div>
      <HowToHelp />
    </client-only>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { utilityMethodsMixin } from '@/plugins/mixins/utilityMethodsMixin'

export default {
  mixins: [utilityMethodsMixin],
  data() {
    return {
      stats1: {
        metric: '2 866 817',
        tagline: 'INSAMLAT & UTDELAT TOTALT',
      },
      stats2: {
        metric: '364 900',
        tagline: 'INSAMLAT & UTDELAT 2022',
      },
      stats3: {
        metric: '248 265',
        tagline: 'INSAMLAT & UTDELAT 2021',
      },

      hero: {
        headline1: 'Slag För Hjältar',
        headline2:
          'Insamlingsstiftelsen som möjliggör en bättre tillvaro för barn och unga. Genom evenemang tillsammans med förenings- och näringslivet donerar vi 100% av alla insamlade medel till icke vinstdrivande organisationer som arbetar inom vård, hälsa och omsorg.',
      },
      event1: {
        body1:
          'Härlig bild från 2021 års insamling där nästan 250000:- överlämnades på plats till glada representanter från Barndiabetesfonden',
        headline: 'Utdelning',
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto,w_1024/v1682673805/SFH/eventphotos/2021.jpg',
      },
      box1: {
        headline: 'Om stiftelsen',
        text: 'Våra värdeord är ledstjärnor i allt vi gör. Utan dem ingen stiftelse. Vill du stötta vårt arbete att hjälpa barn och unga i utsatta sammanhang - då har du kommit rätt.',
        color: 'bg-pink-300',
        route: 'bakgrund',
      },
      box2: {
        headline: 'Insamlingsevent',
        text: 'Varje år håller vi flera insamlingsevents för att kunna knyta nya kontakter och dela en vacker gemenskap.',
        color: 'bg-pink-300',
        route: 'insamlingsevent',
      },
      box3: {
        headline: 'Så hjälper du',
        text: 'Läs mer om hur just du kan komma att betyda mycket för de som inte har det så lätt just nu.',
        color: 'bg-pink-300',
        route: 'hjalp',
      },
    }
  },
  async fetch() {
    await this.getFunds()
  },
  computed: {
    ...mapGetters('events', ['getFundsTotal']),
  },
  methods: {
    ...mapActions('events', ['getFunds']),
  },
}
</script>

