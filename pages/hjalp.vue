<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl=""
    />
    <div class="container mx-auto px-4">
      <div>
        <div
          class="
            container
            mx-auto
            px-4
            grid grid-cols-1
            md:grid-cols-3
            gap-2
            place-items-center
            pt-40
          "
        >
          <Card :content="help1" class="m-3" />
          <Card :content="help2" class="m-3" />
          <Card :content="help3" class="m-3" />
        </div>
        <TextAndImage class="sm:mx-0" :content="content1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        headline1: 'Så hjälper vi tillsammans',
        headline2: '',
      },
      content1: {
        body1:
          'Det finns en rad sätt du kan hjälpa stiftelsen att hjälpa ännu fler barn och unga med behov.',
        body2:
          '1. Du/ ditt företag är välkommen att delta på någon av våra insamlingsevent som arrangeras varje år. Se ”Insamlingsevent” för närmare info.',
        body3:
          '2. Du är välkommen att arrangera ett eget insamlingsinitiativ i samråd med oss. Kontakta oss genom vårt kontaktformulär så tar vi ett prat kring det hela.',
        body4:
          '3. Du är också givetvis alltid välkommen att bidra till våra insamlingar via vårt Swish nummer eller QR kod.',
        body5:
          '4. Vi hoppas också såklart att du vill följa stiftelsen i våra kanaler på Facebook och Instagram. Samt bjuder in dina vänner att göra detsamma!',
        body6:
          'Med andra ord – vi är glada och tacksamma för allt stöd som leder till större möjlighet att hjälpa fler barn och unga!',

        headline: 'Hur kan du hjälpa?',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/barncancerfonden.jpg',
      },
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
