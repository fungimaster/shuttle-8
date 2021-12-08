<template>
  <div>
    <Hero
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-gray-300"
    >
      <template #buttons>
        <button class="btn-pill btn-lg bg-pink-dark-hero" type="button">
          Ge en gåva
        </button>
        <button class="btn-pill btn-lg bg-pink-dark-hero">
          Läs mer om oss
        </button>
      </template>
    </Hero>
    <div class="pb-20 bg-gray-300 -mt-24">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <Box class="pt-12" />
          <Box />
          <Box class="pt-12" />
        </div>
      </div>
    </div>
    <div class="-mt-24 mb-12">
      <TextAndCard
        class="bg-gray-300"
        :ingress="event1.ingress"
        :headline="event1.headline"
        :imgurl="event1.imgurl"
      >
        <template #content>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Don't let your uses guess by attaching tooltips and popoves to any
            element. Just make sure you enable them first via JavaScript.
          </p>
          <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to go.
            Just make sure you enable them first via JavaScript.
          </p>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            class="font-bold text-gray-800 mt-8"
            >Check Tailwind Starter Kit!</a
          >
        </template>
      </TextAndCard>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        headline1: 'Insamlingsevent',
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

