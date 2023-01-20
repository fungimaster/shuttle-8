<template>
  <div>
    <Hero
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
    />
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 place-items-center pt-40">
      <ProfileSH name="Daniel Telford" />
      <ProfileSH name="Henrik Karlsson" />
      <ProfileSH name="Bengt Wehlin" />
      <ProfileSH name="Anita Deveroux" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center pt-40">
      <Card
        class="m-3"
        imgurl="https://slagforhjaltar.se/wp-content/uploads/2021/03/barncancerfonden.jpg"
      />
      <Card
        class="m-3"
        imgurl="https://slagforhjaltar.se/wp-content/uploads/2021/03/barncancerfonden.jpg"
      />
      <Card
        class="m-3"
        imgurl="https://slagforhjaltar.se/wp-content/uploads/2021/03/barncancerfonden.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        headline1: 'Johans testsida',
        headline2:
          'Varje år arrangerar vi flera insamlingsevents där vi alla kan fira med kärlek, glädje, gemenskap & engagemang!',
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
