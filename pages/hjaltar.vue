<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
    >
      <template #svg>
        <SvgHero></SvgHero>
      </template>
    </HeroSection>
    <ImageAndText :content="content1">
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

          Vi har många att tacka för mycket!
        </h3>
        <p class="text">
          Vi har många att tacka för mycket! Att ha så många fina, engagerade
          eldsjälar kopplade till stiftelsen gör oss otroligt ödmjuka och
          lyckliga! Ni är många och vi önskar lyfta var och en av er till
          skyarna! Nedan har vi en enkel sammanställning över genomförda event
          och vilka företag vi haft förmånen att ha med oss på resan.
        </p>
        <p class="text">
          Ni är guld värda och ni står alla för stiftelsens värdeord: kärlek,
          glädje, gemenskap och engagemang!
        </p>
        <p class="text">
          Tusen varma tack till var och en! För vad ni gör. Vilka ni är. Ni är
          alla stiftelsens hjältar!
        </p>
      </template>
    </ImageAndText>

    <div class="container mx-auto px-8 md:px-16 md:pt-20">
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10">
        <Stats class="py-10 mt-5" :content="stats1" />
        <Stats class="py-10 mt-5" :content="stats1" />
        <Stats class="py-10 mt-5" :content="stats1" />
      </div>
      <div>
        <h2 class="headline2 mt-10">Våra hjältar 2020</h2>

        <div class="grid grid-cols-1 md:grid-cols-3">
          <HeroProfile
            v-for="hero in heros2020"
            :key="hero.index"
            :hero="hero"
            class="py-5 md:pr-5"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-1">
        <HeroSmall :hero="hero1" />
        <HeroSmall :hero="hero1" />
        <HeroSmall :hero="hero1" />
        <HeroSmall :hero="hero1" />
        <HeroSmall :hero="hero1" />
      </div>
      <div class="flex flex-col mt-20 md:px-56">
        <HeroMention class="mb-10" :hero="hero1" />
        <HeroMention class="mb-10" :hero="hero1" />
        <HeroMention class="mb-10" :hero="hero1" />
        <HeroMention class="mb-10" :hero="hero1" />
        <HeroMention class="mb-10" :hero="hero1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats1: {
        metric: '1500000',
        tagline: 'INSAMLAT & UTDELAT 2016-2018',
      },
      hero: {
        headline1: 'Alla våra Hjältar',
        headline2:
          'Våra hjältar delar våran värdegrund formad runt kärlek, glädje, gemenskap & engagemang.',
      },
      content1: {
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269548/SFH/site/slagforhjaltar-12.jpg',
      },
      hero1: {
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed reiciendis, amet magnam ipsam est tempore explicabo accusamus quas perspiciatis, voluptates qui saepe, nostrum possimus itaque consequuntur non quam nobis.',
        name: 'Professionell Säkerhet',
        location: 'Helsingborg',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/05/Sakerhet.jpg',
      },
      heros2020: [
        {
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed reiciendis, amet magnam ipsam est tempore explicabo accusamus quas perspiciatis, voluptates qui saepe, nostrum possimus itaque consequuntur non quam nobis.',
          name: 'Professionell Säkerhet',
          location: 'Helsingborg',
          imgurl:
            'https://res.cloudinary.com/dk1b2ytfl/image/upload/c_scale,h_70/v1644609905/slag%20f%C3%B6r%20hj%C3%A4ltar/bosse_faksi0.jpg',
        },
        {
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed reiciendis, amet magnam ipsam est tempore explicabo accusamus quas perspiciatis, voluptates qui saepe, nostrum possimus itaque consequuntur non quam nobis.',
          name: 'Professionell Säkerhet',
          location: 'Helsingborg',
          imgurl:
            'https://res.cloudinary.com/dk1b2ytfl/image/upload/c_scale,h_70/v1644609904/slag%20f%C3%B6r%20hj%C3%A4ltar/Aktiverum_sns4sp.jpg',
        },
        {
          body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed reiciendis, amet magnam ipsam est tempore explicabo accusamus quas perspiciatis, voluptates qui saepe, nostrum possimus itaque consequuntur non quam nobis.',
          name: 'Professionell Säkerhet',
          location: 'Helsingborg',
          imgurl:
            'https://res.cloudinary.com/dk1b2ytfl/image/upload/c_scale,h_70/v1644609904/slag%20f%C3%B6r%20hj%C3%A4ltar/future_yppklj.jpg',
        },
      ],
    }
  },
}
</script>

<style >
</style>
