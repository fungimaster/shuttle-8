<template>
  <div class="container mx-auto px-8 md:px-16 w-full">
    <div class="pb-20 pt-24 py-20">
      <!--   <h1 class="font-semibold text-4xl text-pink-hero tracking-wider">
            Tillsammans så gör vi stor skillnad. Hur kan du hjälpa?
          </h1> -->

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div
          v-for="(help, index) in howToHelp"
          :key="index"
          class="
            w-full
            col-span-1
            row-span-1
            rounded
            bg-pink-100
            px-10
            py-10
            pb-16
            hover:shadow-md
            focus:shadow-md
          "
        >
          <SvgEventMini v-if="index === 0" />
          <SvgOurSolutionMini v-if="index === 1" />
          <SvgLovingItMini v-if="index === 2" />
          <SvgSocialNetworkMini v-if="index === 3" />
          <h3 class="headline3 pt-10">
            <h3 class="text-gray-600">{{ help.headline }}</h3>
          </h3>
          <p class="text text-left">
            <p class="text-gray-500"> {{ help.text }}</p>
           </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      howToHelp: [
        {
          headline: 'Delta på Insamlingsevent',
          text: 'Du/ditt företag är välkommen att delta på någon av våra insamlingsevent som arrangeras varje år. Se ”Insamlingsevent” för närmare info.',
          color: 'bg-pink-300',
        },
        {
          headline: 'Arrangera event',
          text: 'Du är välkommen att arrangera ett eget insamlingsinitiativ i samråd med oss. Kontakta oss genom vårt kontaktformulär så tar vi ett prat kring det hela.',
          color: 'bg-pink-600',
        },
        {
          headline: 'Swish en gåva',
          text: 'Du är också givetvis alltid välkommen att bidra till våra insamlingar via vårt Swish nummer eller QR kod.',
          color: 'bg-pink-300',
        },
        {
          headline: 'Följ oss och sprid budskapet!',
          text: 'Vi hoppas också såklart att du vill följa stiftelsen i våra kanaler på Facebook och Instagram. Samt bjuder in dina vänner att göra detsamma!',
          color: 'bg-pink-600',
        },
      ],
    }
  },
}
</script>