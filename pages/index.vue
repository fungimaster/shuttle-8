<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/o_20/v1641996251/medal_mtvkui.png"
      imgurl2="https://res.cloudinary.com/dk1b2ytfl/image/upload/o_20/v1641997457/vector_ixay5z.png"
      color="text-white"
    >
      <template #buttons>
        <button class="btn-pill btn-lg bg-white" type="button">
          Ge en gåva
        </button>
        <button class="btn-pill btn-lg bg-white" type="button">
          Läs mer om oss
        </button>
      </template>
    </HeroSection>
    <div class="pb-20 pt-24 py-20">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap">
          <Box class="pt-12" :content="box1" />
          <Box :content="box2" />
          <Box class="pt-12" :content="box3" />
        </div>
      </div>
    </div>
    <div class="py-24 bg-gray-50">
      <TextAndCard
        :ingress="event1.ingress"
        :headline="event1.headline"
        :content="event1"
      >
        <template #content>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            Rubrik och tjohej!
          </h3>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id
            tenetur nulla pariatur distinctio atque in asperiores facilis!
            Aspernatur nam velit repellat suscipit ipsa eius expedita molestiae
            cum voluptatum error.
          </p>
          <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic id
            tenetur nulla pariatur distinctio atque in asperiores facilis!
            Aspernatur nam velit repellat suscipit ipsa eius expedita molestiae
            cum voluptatum error.
          </p>
          <a href="#" class="font-bold text-gray-800 mt-8">Link to stuff</a>
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
        headline1: 'Slag För Hjältar',
        headline2:
          'Genom evenemang tillsammans med förening- och näringslivet donerar vi insamlade medel till icke vinstdrivande organisationer som arbetar inom vård, hälsa och omsorg.',
      },
      event1: {
        body1:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ratione itaque quas mollitia quis in aliquid sint hic ipsum vel quod eveniet nobis tempora, neque molestiae libero cupiditate rem numquam!m',
        headline: '2021 - Insamlingsevent',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/11/slagforhjaltar-2021.jpg',
      },
      box1: {
        headline: 'Vilka är vi?',
        text: 'Här nedan kan du klicka vidare för att läsa mer om hur allt startade och vad vi göra idag. Du kan också läsa om våra hjältar och hur vår stiftelse kunnat hjälpa till.',
        color: 'bg-pink-300',
      },
      box2: {
        headline: 'Insamlingsevent',
        text: 'Varje år håller vi flera insamlingsevents för att kunna knyta nya kontakter och dela en vacker gemenskap.',
        color: 'bg-pink-600',
      },
      box3: {
        headline: 'Så hjälper du!',
        text: 'Läs mer om hur just du kan komma att betyda mycket för de som inte har det så lätt just nu.',
        color: 'bg-pink-900',
      },
    }
  },
}
</script>

