<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
    >
      <template #svg>
        <SvgContactus></SvgContactus>
      </template>
    </HeroSection>

    <div class="container mx-auto pb-52">
      <ImageAndText :content="content1" class="pt-28 pb-16">
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

            Kontakt oss!
          </h3>
          <p class="text">
            Du är alltid välkommen att kontakta oss. Enklast genom att skicka
            ett mejl till info@slagforhjaltar.se. Vi tar gärna emot förslag på
            verksamheter som jobbar med att förbättra livet för barn och unga på
            olika vis. Tack för ditt engagemang!
          </p>
          <a href="mailto:info@slagforhjaltar.se"
            ><h4 class="headline4">info@slagforhjaltar.se</h4></a
          >
        </template>
      </ImageAndText>
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
          'Har du någon idé eller ett förslag kring en insamlingsaktivitet? Kanske vill du delta som volontär? Oavsett är du välkommen att kontakta oss enligt nedan!',
      },
      content1: {
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/v1647269654/SFH/site/slagforhjaltar-18.jpg',
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
