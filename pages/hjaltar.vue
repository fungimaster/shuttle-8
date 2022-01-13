<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/o_20/v1641995935/superhero_oyqcui.png"
    />
    <div class="container mx-auto px-4">
      <TextOverImage :content="content1" class="py-28 mb-52" />
      <HeroProfile :hero="hero1" class="mb-20 pt-20" />
      <HeroProfile :hero="hero1" class="mb-20" />
      <HeroProfile :hero="hero1" class="mb-20" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-1">
        <HeroSmall :hero="hero1" />
        <HeroSmall :hero="hero1" />
        <HeroSmall :hero="hero1" />
        <HeroSmall :hero="hero1" />
        <HeroSmall :hero="hero1" />
      </div>
      <div class="flex flex-col mt-20">
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
      hero: {
        headline1: 'Hjältar',
        headline2: '',
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
