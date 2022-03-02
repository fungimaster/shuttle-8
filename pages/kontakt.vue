<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625884/slagforhjaltar-15_uvgc5d.jpg"
    >
      <template #svg>
        <SvgContactus></SvgContactus>
      </template>
    </HeroSection>

    <div class="container pb-52">
      <ImageAndText :content="content1" class="pt-28 pb-16">
        <template #content>
          <h3 class="headline3">
            <span
              class="
                w-10
                h-10
                shadow-lg
                rounded-full
                bg-pink-hero
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

            Kontakt oss!
          </h3>
          <p class="text">
            Du är alltid välkommen att kontakta oss och det gör du på bästa sätt
            genom att skicka ett mejl till info@slagforhjaltar.se. Vi tar gärna
            emot förslag på verksamheter som jobbar med att förbättra livet för
            barn och unga på olika vis.
          </p>
          <h4 class="headline4">info@slagforhjaltar.se</h4>
        </template>
      </ImageAndText>
      <ContactForm class="mx-auto px-8 md:px-16" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        headline1: 'Kontakt',
        headline2:
          ' Har du något förslag eller önskar söka medel är du välkommen att skriva till oss via formuläret nedan.',
      },
      content1: {
        imgurl:
          'https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625313/slagforhjaltar-49_vjz3zv.jpg',
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
