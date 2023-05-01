<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
    >
      <template #svg>
        <SvgShowingSupport></SvgShowingSupport>
      </template>
    </HeroSection>
    <ImageAndText :content="content1">
      <template #content>
        <h3 class="headline3">
          <span
            class="w-10 h-10 shadow-lg rounded-full heart-bg inline-flex items-center justify-center"
          >
            <font-awesome-icon
              class="w-7 h-7 text-white overflow-visible"
              :icon="['far', 'heart']"
            />
          </span>

          Vi har många att tacka för mycket!
        </h3>
        <p class="text">
          Att ha så många fina, engagerade eldsjälar kopplade till stiftelsen
          gör oss otroligt ödmjuka och lyckliga! Ni är många och vi önskar lyfta
          var och en av er till skyarna! Nedan har vi en enkel sammanställning
          över hittills genomförda insamlingar och vilka företag vi haft
          förmånen att ha med oss på resan.
        </p>
        <p class="text">
          Ni är guld värda och ni delar alla stiftelsens värdegrund; kärlek,
          glädje, gemenskap och engagemang.
        </p>
        <p class="text">
          Tusen varma tack till var och en. För vad ni gör. Vilka ni är. Ni är
          alla stiftelsens hjältar!
        </p>
      </template>
    </ImageAndText>

    <div class="container mx-auto px-8 md:px-16 md:pt-20">
      <div class="grid grid-cols-1 md:grid-cols-3 md:gap-10">
        <Stats class="py-10 mt-5" :content="stats1" />
        <Stats class="py-10 mt-5" :content="stats2" />
        <Stats class="py-10 mt-5" :content="stats3" />
      </div>
      <div>
        <h2 class="headline2 mt-10">Evigt tack för hjälpen</h2>
        <p class="text">
          I uppstarten fick stiftelsen ovärderlig hjälp att komma igång. Detta
          är vi otroligt tacksamma för. Vårt eviga tack till hjältarna nedan!
        </p>

        <div class="grid grid-cols-1 lg:grid-cols-3">
          <HeroProfile
            v-for="hero in eternalHeroes"
            :key="hero.index"
            :hero="hero"
            class="py-5 md:pr-5"
          />
        </div>
      </div>

      <!--   <div class="flex flex-col mt-20 md:px-56">
        <HeroMention class="mb-10" :hero="hero1" />
        <HeroMention class="mb-10" :hero="hero1" />
        <HeroMention class="mb-10" :hero="hero1" />
        <HeroMention class="mb-10" :hero="hero1" />
        <HeroMention class="mb-10" :hero="hero1" />
      </div> -->
      <TextAndImage :content="content2" hidden>
        <template #content>
          <h3 class="headline3">
            <span
              class="w-10 h-10 shadow-lg rounded-full heart-bg inline-flex items-center justify-center"
            >
              <font-awesome-icon
                class="w-7 h-7 text-white overflow-visible"
                :icon="['far', 'heart']"
              />
            </span>

            Starten 2019
          </h3>
          <p class="text">
            2019 var stiftelsens första verksamhetsår. Ett lika spännande som
            roligt år! Vi summerar året med orden givande och mycket arbete.
            Fokus har legat kring att starta upp stiftelsen i sin helhet men
            också på att sätta rutiner för såväl aktiviteter som styrelsearbete
            och partnerskap.
          </p>
          <p class="text">
            Vi konstaterar stolt att stiftelsens första år varit riktigt bra. Vi
            har genomfört flera lyckade och uppskattade event. Vår ambition om
            att vara en helt kostnadsfri stiftelse, dvs att alla insamlade medel
            oavkortat delas ut, har kunnat uppfyllas tack vare stort engagemang
            från såväl partners som stiftare som med mycket hjärta aldrig tvekar
            att bidra extra för att vi ska få ihop “sista raden”.
          </p>
          <p class="text">
            Under 2019 samlade vi in 424 852 kr samt delat ut 328 800 kr till
            Ellas Hjältar och Barncancerfonden Södra.
          </p>
        </template>
      </TextAndImage>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stats1: {
        metric: '2 866 817',
        tagline: 'INSAMLAT & UTDELAT TOTALT',
      },
      stats2: {
        metric: '364 900',
        tagline: 'INSAMLAT & UTDELAT 2022',
      },
      stats3: {
        metric: '248 265',
        tagline: 'INSAMLAT & UTDELAT 2021',
      },
      hero: {
        headline1: 'Alla våra Hjältar',
        headline2:
          'I stort som smått har vi förmånen att år från år möta såväl nya som återkommande godhjärtade Hjältar.',
      },
      content1: {
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto,w_1200/v1647269548/SFH/site/slagforhjaltar-12.jpg',
      },
      content2: {
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto,w_1200/v1647269525/SFH/site/slagforhjaltar-6.jpg',
      },
      hero1: {
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed reiciendis, amet magnam ipsam est tempore explicabo accusamus quas perspiciatis, voluptates qui saepe, nostrum possimus itaque consequuntur non quam nobis.',
        name: 'Professionell Säkerhet',
        location: 'Helsingborg',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/05/Sakerhet.jpg',
      },
      eternalHeroes: [
        {
          url: 'https://www.mynewsdesk.com/se/lindahl',
          name: 'Advokatfirman Lindahl, Malmö',
          location: 'Helsingborg',
          imgurl:
            'https://res.cloudinary.com/dn3hzwewp/image/upload/v1649615491/SFH/site/Lindhal-2.jpg',
        },
        {
          url: 'https://www.lansforsakringar.se/skane/privat/',
          name: 'Länsförsäkringar',
          location: 'Helsingborg',
          imgurl:
            'https://res.cloudinary.com/dn3hzwewp/image/upload/v1649615491/SFH/site/lans.jpg',
        },
        {
          url: 'https://www.ey.com/sv_se',
          name: 'EY',
          location: 'Helsingborg',
          imgurl:
            'https://res.cloudinary.com/dn3hzwewp/image/upload/v1649615491/SFH/site/Untitled-2.jpg',
        },
        {
          url: 'http://www.pingvinpress.se/default.asp?redID=1',
          name: 'Pingvin Press',
          location: 'Helsingborg',
          imgurl:
            'https://res.cloudinary.com/dn3hzwewp/image/upload/v1649615491/SFH/site/pingvin-2.0.jpg',
        },
        {
          url: 'https://eriksfonsterputs.se/sa-funkar-det?campaign=WEBB21&gclid=CjwKCAjwy42FBhB2EiwAJY0yQkRPLObDkb1bcWQjCYja9CE5Gwvzya0jt2CnY3ZPoiUA7kr2eBpLhBoCL9MQAvD_BwE',
          name: 'Eriks Fönsterputs',
          location: 'Helsingborg',
          imgurl:
            'https://res.cloudinary.com/dn3hzwewp/image/upload/v1649615491/SFH/site/fonsterputs-med-gratt.jpg',
        },
        {
          url: 'https://professionellsakerhet.se/',
          name: 'Professionell Säkerhet',
          location: 'Helsingborg',
          imgurl:
            'https://res.cloudinary.com/dn3hzwewp/image/upload/v1649615491/SFH/site/Sakerhet.jpg',
        },
      ],
    }
  },
}
</script>

<style >
</style>

