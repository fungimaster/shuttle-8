<template>
  <div>
    <client-only>
      <HeroSection5
        :headline1="hero.headline1"
        :headline3="hero.headline3"
        :headline2="hero.headline2"
        color="text-white"
        imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625282/slagforhjaltar-26_e7wuvd.jpg"
      >
        <template #svg>
          <SvgEvent></SvgEvent>
        </template>
      </HeroSection5>
      <div
        class="
          bg-gray-100
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
        headline1: 'Insamlings-',
        headline3: 'event',
        headline2:
          'Varje år arrangerar vi flera insamlingsevents där vi alla kan fira med kärlek, glädje, gemenskap & engagemang!',
      },
      event1: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione itaque quas mollitia quis in aliquid sint hic ipsum vel quod eveniet nobis tempora, neque molestiae libero cupiditate rem numquam!m',
        headline: '2021',
        imgurl:
          'https://res.cloudinary.com/dk1b2ytfl/image/upload/c_crop,h_500/v1642251732/barncancerfonden3_hlxxcj.jpg',
      },
      event2: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione itaque quas mollitia quis in aliquid sint hic ipsum vel quod eveniet nobis tempora, neque molestiae libero cupiditate rem numquam!m',
        headline: '2020',
        imgurl:
          'https://res.cloudinary.com/dk1b2ytfl/image/upload/c_crop,h_500/v1642251451/slag-for-hjaltar-events_fs52yg.jpg',
      },
      event3: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione itaque quas mollitia quis in aliquid sint hic ipsum vel quod eveniet nobis tempora, neque molestiae libero cupiditate rem numquam!m',
        headline: '2019',
        imgurl:
          'https://res.cloudinary.com/dk1b2ytfl/image/upload/c_crop,h_600/v1642251732/barncancerfonden3_hlxxcj.jpg',
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
