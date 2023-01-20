<template>
  <div class="">
    <client-only>
      <HeroSection
        :isIndex="true"
        :headline1="hero.headline1"
        :headline2="hero.headline2"
        color="text-white"
      >
        <template #svg>
          <SvgStandout />
        </template>

        <template #buttons>
          <div class="flex mb-4">
            <small class="text-pink-dark-hero"
              >* Anmälan till golf visas bara om det finns en aktiv tävling för
              golf där anmälningsfönstret är öppen.</small
            >
          </div>
          <div class="md:flex">
            <button
              class="btn-pill w-full md:w-1/2 btn-lg bg-white"
              type="button"
              @click="$_handleRouting('/minsida')"
            >
              Anmälan golf
            </button>
            <button hidden class="btn-pill btn-lg bg-white" type="button">
              Ge en gåva
            </button>
            <button
              class="
                btn-pill
                w-full
                md:w-1/2
                btn-lg
                bg-white
                mt-5
                md:mt-0 md:ml-10
              "
              type="button"
            >
              Läs mer om oss
            </button>
          </div>
        </template>
      </HeroSection>

      <div class="pb-20 pt-0 md:pt-24 py-20">
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
                class="
                  w-10
                  h-10
                  shadow-lg
                  rounded-full
                  heart-bg
                  inline-flex
                  items-center
                  justify-center
                "
              >
                <font-awesome-icon
                  class="w-7 h-7 text-white overflow-visible"
                  :icon="['far', 'heart']"
                />
              </span>

              Så hjälper vi
            </h3>
            <p class="text">
              Det arbete vi gör är viktigt för oss och de organisationer vi
              stödjer. Med hjälp av interna insamlingar där engagerade och
              involverades hjälp har spelat stor roll så vi lyckats med att
              stödja organisationer och hjälpa vederbörande till en förbättrad
              livsstil. Under året 2019 delade vi ut vårt insamlade medel till
              två organisationer som gör en stor skillnad i vårt samhälle. Alla
              våra medel gick till Barncancerfonden och Ellas Hjältar – tack för
              det fina arbetet ni har gjort och fortsätter att göra!
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
      hero: {
        headline1: 'Slag För Hjältar',
        headline2:
          'Genom evenemang tillsammans med förening- och näringslivet donerar vi insamlade medel till icke vinstdrivande organisationer som arbetar inom vård, hälsa och omsorg.',
      },
      event1: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione itaque quas mollitia quis in aliquid sint hic ipsum vel quod eveniet nobis tempora, neque molestiae libero cupiditate rem numquam!m',
        headline: 'Utdelning',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/11/slagforhjaltar-2021.jpg',
      },
      box1: {
        headline: 'Bakgrund',
        text: 'Engagemanget började redan 2015 sedan en nära väns dotter till en av våra grundare, Daniel Telford, drabbades av cancer.',
        color: 'bg-pink-300',
      },
      box2: {
        headline: 'Insamlingsevent',
        text: 'Varje år håller vi flera insamlingsevents för att kunna knyta nya kontakter och dela en vacker gemenskap.',
        color: 'bg-pink-300',
      },
      box3: {
        headline: 'Så hjälper du!',
        text: 'Läs mer om hur just du kan komma att betyda mycket för de som inte har det så lätt just nu.',
        color: 'bg-pink-300',
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

