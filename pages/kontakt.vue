<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl=""
    />

    <div class="container mx-auto px-4 pb-52">
      <TextOverImage :content="content1" class="py-28 mb-52" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        headline1: 'Kontakt',
        headline2: '',
      },
      content1: {
        body: 'Du är alltid välkommen att kontakta oss och det gör du på bästa sätt genom att skicka ett mejl till info@slagforhjaltar.se. Vi tar gärna emot förslag på verksamheter som jobbar med att förbättra livet för barn och unga på olika vis. Har du något förslag eller önskar söka medel är du välkommen att skriva till oss via formuläret nedan. ',
        headline: 'Kontakta oss ',
        ending: 'info@slagforhjaltar.se',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/slag-for-hjaltar-events.jpg',
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
