<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl=""
    />
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
      <Card class="m-3" :content="event1" />
      <Card class="m-3" :content="event1" />
      <Card class="m-3" :content="event1" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        headline1: 'Kontakt',
      },
      event1: {
        ingress: 'Lorem ipsum dolor sit, amet consectetur',
        headline: '2021',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/allerum-golf-2.jpg',
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
