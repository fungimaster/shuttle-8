<template>
  <div>
    <client-only>
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
          pt-20
        "
      >
        <Card class="m-3" :content="event1" />
        <Card class="m-3" :content="event2" />
        <Card class="m-3" :content="event3" />
        <Card class="m-3" :content="event1" />
        <Card class="m-3" :content="event2" />
        <Card class="m-3" :content="event3" />
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        headline1: 'Insamlings- event',
        headline2:
          'Varje år arrangerar vi flera insamlingsevents där vi alla kan fira med kärlek, glädje, gemenskap & engagemang!',
      },
      event1: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione itaque quas mollitia quis in aliquid sint hic ipsum vel quod eveniet nobis tempora, neque molestiae libero cupiditate rem numquam!m',
        headline: '2021',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/ellas-hjaltar.jpg',
      },
      event2: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione itaque quas mollitia quis in aliquid sint hic ipsum vel quod eveniet nobis tempora, neque molestiae libero cupiditate rem numquam!m',
        headline: '2020',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/1080x600_eston.jpg',
      },
      event3: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione itaque quas mollitia quis in aliquid sint hic ipsum vel quod eveniet nobis tempora, neque molestiae libero cupiditate rem numquam!m',
        headline: '2019',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/ellas-hjaltar.jpg',
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
