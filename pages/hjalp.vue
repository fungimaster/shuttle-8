<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625254/slagforhjaltar-9_rs8lpa.jpg"
    >
      <template #svg> <SvgLove /> </template
    ></HeroSection>
    <div class="py-12 px4 md:px-16 bg-gray-50">
      <div class="container mx-auto px-8 md:px-16">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h2 class="headline2">Tillsammans så gör vi stor skillnad</h2>
            <p>Swischa en gåva idag! Till nummer:</p>
            <h3 class="headline4 inline">123 558 47 84</h3>
          </div>
          <div class="flex justify-center">
            <img
              src="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1645456326/slag%20f%C3%B6r%20hj%C3%A4ltar/qr_mrrlgk.svg"
              alt="swish"
              class="h-40"
            />
          </div>
        </div>
      </div>
    </div>
    <HowToHelp></HowToHelp>
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
