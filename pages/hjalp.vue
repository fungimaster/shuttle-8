<template>
  <div>
    <HeroSection5
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625254/slagforhjaltar-9_rs8lpa.jpg"
    >
      <template #svg> <SvgLove /> </template
    ></HeroSection5>
    <div class="containermx-auto px-4 md:px-16 w-full">
      <div class="pb-20 pt-24 py-20">
        <!--   <h1 class="font-semibold text-4xl text-pink-hero tracking-wider">
            Tillsammans så gör vi stor skillnad. Hur kan du hjälpa?
          </h1> -->

        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
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
            <h1
              class="
                py-10
                text-left
                leading-normal
                text-2xl text-black
                tracking-wider
                break-words
              "
            >
              {{ help.headline }}
            </h1>
            <p class="tracking-wider text-black text-left">{{ help.text }}</p>
          </div>
        </div>
      </div>

      <!-- <TextAndImage class="sm:mx-0" :content="content1" /> -->

      <!--      <div
          class="
            container
            mx-auto
            px-4
            md:px-16
            grid grid-cols-1
            md:grid-cols-3
            gap-2
            place-items-center
            pt-20
          "
        >
          <Card :content="help1" class="m-3" />
          <Card :content="help2" class="m-3" />
          <Card :content="help3" class="m-3" />
        </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        headline1: 'Så hjälper du',
        headline2:
          'Tveka aldrig att kontakta oss på något av nedanstående sätt, vi svarar gärna på frågor!',
      },
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

      help1: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde, et est porro fuga quibusdam expedita modi voluptatum quaerat laboriosam doloribus eaque consectetur excepturi numquam alias eveniet odit quis facilis?',
        headline: '2019 - Barncancerfonden Södra och Ellas Hjältar',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/barncancerfonden.jpg',
      },
      help2: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde, et est porro fuga quibusdam expedita modi voluptatum quaerat laboriosam doloribus eaque consectetur excepturi numquam alias eveniet odit quis facilis?',
        headline: '2020 - Barncancerfonden Södra och Ellas Hjältar',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/barncancerfonden.jpg',
      },
      help3: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod unde, et est porro fuga quibusdam expedita modi voluptatum quaerat laboriosam doloribus eaque consectetur excepturi numquam alias eveniet odit quis facilis?',
        headline: '2021 - Barncancerfonden Södra och Ellas Hjältar',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/barncancerfonden.jpg',
      },
    }
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
</style>
