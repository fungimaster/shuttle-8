<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625884/slagforhjaltar-15_uvgc5d.jpg"
    />
    <div class="container mx-auto px-4">
      <TextOverImage
        :content="content1"
        class="py-28 md:pb-10 mb-52 md:mb-10"
      />
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10">
        <Stats class="py-10 mt-5" :content="stats1" />
        <Stats class="py-10 mt-5" :content="stats1" />
        <Stats class="py-10 mt-5" :content="stats1" />
      </div>
      <div class="grid grid-cols-1 md:px-44">
        <HeroProfile :hero="hero1" class="mb-20 pt-20" />
        <HeroProfile :hero="hero1" class="mb-20" />
        <HeroProfile :hero="hero1" class="mb-20" />
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
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed reiciendis, amet magnam ipsam est tempore explicabo accusamus quas perspiciatis, voluptates qui saepe, nostrum possimus itaque consequuntur non quam nobis.',
        headline: 'Våra hjältar',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/slag-for-hjaltar-events.jpg',
      },
      hero1: {
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed reiciendis, amet magnam ipsam est tempore explicabo accusamus quas perspiciatis, voluptates qui saepe, nostrum possimus itaque consequuntur non quam nobis.',
        name: 'Professionell Säkerhet',
        location: 'Helsingborg',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/05/Sakerhet.jpg',
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
