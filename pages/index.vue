<template>
  <div class="">
    <client-only>
      <HeroSection4
        :isIndex="true"
        :headline1="hero.headline1"
        :headline2="hero.headline2"
        imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643621911/slagforhjaltar-6_uma48u.jpg"
        color="text-white"
      >
        <template #svg>
          <SvgHero
            class="md:float-right hidden md:block absolute top-0 left-60"
          />
          <SvgHero class="md:hidden absolute top-60 left-28" />
        </template>
        <template #buttons>
          <div class="hidden md:flex">
            <button class="btn-pill btn-lg bg-white" type="button">
              Ge en gåva
            </button>
            <button
              class="btn-pill btn-lg bg-white mt-5 md:mt-0 md:ml-10"
              type="button"
            >
              Läs mer om oss
            </button>
          </div>
        </template>
      </HeroSection4>

      <div class="pb-20 pt-24 py-20">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <Box class="w-full md:w-4/12" :content="box1" />
            <Box class="w-full md:w-4/12" :content="box2" />
            <Box class="w-full md:w-4/12" :content="box3" />
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
              Så hjälper vi
            </h3>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
            >
              Det arbete vi gör är viktigt för oss och de organisationer vi
              stödjer. Med hjälp av interna insamlingar där engagerade och
              involverades hjälp har spelat stor roll så vi lyckats med att
              stödja organisationer och hjälpa vederbörande till en förbättrad
              livsstil. Under året 2019 delade vi ut vårt insamlade medel till
              två organisationer som gör en stor skillnad i vårt samhälle. Alla
              våra medel gick till Barncancerfonden och Ellas Hjältar – tack för
              det fina arbetet ni har gjort och fortsätter att göra!
            </p>
          </template>
        </TextAndCard>
      </div>
    </client-only>
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
        headline: 'Utdelning',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/11/slagforhjaltar-2021.jpg',
      },
      box1: {
        headline: 'Bakgrund',
        text: 'Engagemanget började redan 2015 sedan en nära väns dotter till en av våra grundare, Daniel Telford, drabbades av cancer.',
        color: 'bg-pink-300',
      },
      box2: {
        headline: 'Insamlingsevent',
        text: 'Varje år håller vi flera insamlingsevents för att kunna knyta nya kontakter och dela en vacker gemenskap.',
        color: 'bg-pink-300',
      },
      box3: {
        headline: 'Så hjälper du!',
        text: 'Läs mer om hur just du kan komma att betyda mycket för de som inte har det så lätt just nu.',
        color: 'bg-pink-300',
      },
    }
  },
}
</script>

