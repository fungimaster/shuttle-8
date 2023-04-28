<template>
  <div class="container mx-auto px-8 md:px-16 w-full">
    <div class="pb-20 pt-24 py-20">
      <!--   <h1 class="font-semibold text-4xl text-pink-hero tracking-wider">
            Tillsammans så gör vi stor skillnad. Hur kan du hjälpa?
          </h1> -->

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 cursor-pointer"
      >
        <div
          v-for="(help, index) in howToHelp"
          :key="index"
          class="w-full col-span-1 row-span-1 rounded bg-pink-100 px-10 py-10 pb-16 hover:shadow-md focus:shadow-md"
          @click="$_handleRouting(help.route, help.external)"
        >
          <div class="items-center flex justify-center">
            <SvgEventMini v-if="index === 0" />
            <SvgOurSolutionMini v-if="index === 1" />
            <SvgLovingItMini v-if="index === 2" />
            <SvgSocialNetworkMini v-if="index === 3" />
          </div>
          <h3 class="headline3 pt-10">
            <h3 class="text-gray-600">{{ help.headline }}</h3>
          </h3>
          <p class="text text-left">
            <span class="text-gray-500"> {{ help.text }}</span>
          </p>
          <img
            v-if="help.image"
            :src="help.image"
            alt="swish"
            class="h-40 items-center flex justify-center"
            style="margin: 0 auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { utilityMethodsMixin } from '@/plugins/mixins/utilityMethodsMixin'
export default {
  mixins: [utilityMethodsMixin],
  data() {
    return {
      howToHelp: [
        {
          headline: 'Delta på insamlingsevent',
          text: 'Du/ditt företag är välkommen att delta på någon av våra insamlingsevent som arrangeras varje år. Se ”Insamlingsevent” för aktuell information.',
          color: 'bg-pink-300',
          route: 'insamlingsevent',
        },
        {
          headline: 'Arrangera event',
          text: 'Du/ditt företag är välkommen att arrangera ett eget insamlingsinitiativ i samråd med oss. Kontakta oss så tar vi ett prat kring det hela.',
          color: 'bg-pink-600',
          route: 'kontakt',
        },
        {
          headline: 'Swisha en gåva',
          text: 'Du/ ditt företag är välkommen att bidra till våra insamlingar via vårt Swish nummer eller QR kod.',
          color: 'bg-pink-300',
          route: 'hjalp',
          image:
            'https://res.cloudinary.com/dn3hzwewp/image/upload/v1647270154/SFH/site/qr_mrrlgk.svg',
        },
        {
          headline: 'Följ oss och sprid budskapet!',
          text: 'Vi hoppas också såklart att du vill följa stiftelsen i våra kanaler på Facebook och Instagram. Samt bjuder in dina vänner att göra detsamma! Det finns plats för många godhjärtade följare!',
          color: 'bg-pink-600',
          route: 'https://www.facebook.com/slagforhjaltar',
          external: true,
        },
      ],
    }
  },
}
</script>