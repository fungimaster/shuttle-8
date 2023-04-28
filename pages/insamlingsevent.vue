<template>
  <div>
    <client-only>
      <HeroSection
        :headline1="hero.headline1"
        :headline3="hero.headline3"
        :headline2="hero.headline2"
        color="text-white"
      >
        <template #svg>
          <SvgEvent></SvgEvent>
        </template>
      </HeroSection>
      <!-- 2023 -->
      <div class="py-12 md:px-16 bg-gray-50">
        <TextAndCard
          :ingress="content_2023.ingress"
          :headline="content_2023.headline"
          :content="content_2023"
        >
          <template #content>
            <h3 class="headline3">2023 - Dags för vår tävling igen!</h3>
            <p class="text">
              Snart drar vi igång årets tävling, kontakta oss för att se om det
              finns platser kvar.
            </p>
            <p class="text">
              Tävlingen går av stapeln på Allerum GK fredagen den 26 maj 7.30 -
              18.30 och kostar 10.000 per lag.
              <font-awesome-icon
                class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
                :icon="['far', 'heart']"
              />
            </p>
            <p class="text">
              All KÄRLEK från oss
              <font-awesome-icon
                class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
                :icon="['far', 'heart']"
              />
            </p>
            <h4 class="headline4">
              Anita Duverell, Daniel Telford, Henrik Karlsson, Bengt Wehlin,
              Thomas Krøigård Hansen
            </h4>
          </template>
        </TextAndCard>
      </div>
      <!-- 2022 -->
      <div class="py-12 md:px-16 bg-gray-50">
        <TextAndCard
          :ingress="content_2022.ingress"
          :headline="content_2022.headline"
          :content="content_2022"
        >
          <template #content>
            <h3 class="headline3">2022 - Vilken under dag vi hade!</h3>
            <p class="text">
              Vilken dag och vilken fest vi hade på Slag för Hjältars Golf!
            </p>
            <p class="text">
              Totalt samlades det under dagen in fantastiska 364 900:- som
              fördelades jämnt mellan Barndiabetesfonden och Nätverket Prosit.
              <font-awesome-icon
                class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
                :icon="['far', 'heart']"
              />
            </p>
            <p class="text">
              Att samla goda människor på ett ställe för att göra gott
              tillsammans - det visste vi på förhand var en underbar idé! Men
              det vi skapade igår var inget mindre än ren och skär magi!
              <font-awesome-icon
                class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
                :icon="['far', 'heart']"
              />
              Just nu är vi omtumlade, glada och otroligt lyckliga att ha kunnat
              genomföra eventet med alla er inblandade - inget mindre än riktiga
              HJÄLTAR var och en av er!
              <font-awesome-icon
                class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
                :icon="['far', 'heart']"
              />
            </p>
            <p class="text">
              Häng med oss på vår
              <a href="https://www.facebook.com/slagforhjaltar" target="_blank"
                >Facebooksida - Slag för Hjältar</a
              >
              - detta är bara ett litet första smakprov av alla underbara bilder
              vi tagit under dagen. Vi kommer visa er alla deltagande lag, alla
              våra enastående hålvärdar och såklart alla andra utan vilka vi
              inte kunnat genomföra denna dag.
            </p>
            <p class="text">
              All KÄRLEK från oss
              <font-awesome-icon
                class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
                :icon="['far', 'heart']"
              />
            </p>
            <h4 class="headline4">
              Anita Duverell, Daniel Telford, Henrik Karlsson, Bengt Wehlin,
              Thomas Krøigård Hansen
            </h4>
          </template>
        </TextAndCard>
      </div>
      <!-- 2021 -->
      <div class="py-12 md:px-16 bg-gray-50">
        <TextAndCard
          :ingress="content_2021.ingress"
          :headline="content_2021.headline"
          :content="content_2021"
        >
          <template #content>
            <h3 class="headline3">2021 - Vilken lycka!</h3>
            <p class="text">
              Tävlingen vi väntat så länge på att få hålla. Så många som velat
              bidra med så mycket!
            </p>
            <p class="text">
              Slag för Hjältar Golf på fina Allerum Golfklubb den 27 augusti
              2021 inbringade smått otroliga 248 265 kronor till
              Barndiabetesfonden!
              <font-awesome-icon
                class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
                :icon="['far', 'heart']"
              />
            </p>
            <p class="text">
              Att samla goda människor på ett ställe för att göra gott
              tillsammans - det visste vi på förhand var en underbar idé! Men
              det vi skapade igår var inget mindre än ren och skär magi! Just nu
              är vi omtumlade, glada och otroligt lyckliga att ha kunnat
              genomföra eventet med alla er inblandade - inget mindre än riktiga
              HJÄLTAR var och en av er!
              <font-awesome-icon
                class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
                :icon="['far', 'heart']"
              />
              Just nu är vi omtumlade, glada och otroligt lyckliga att ha kunnat
              genomföra eventet med alla er inblandade - inget mindre än riktiga
              HJÄLTAR var och en av er!
              <font-awesome-icon
                class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
                :icon="['far', 'heart']"
              />
            </p>
            <p class="text">
              Häng med oss på vår
              <a href="https://www.facebook.com/slagforhjaltar" target="_blank"
                >Facebooksida - Slag för Hjältar</a
              >
              - detta är bara ett litet första smakprov av alla underbara bilder
              vi tagit under dagen. Vi kommer visa er alla deltagande lag, alla
              våra enastående hålvärdar och såklart alla andra utan vilka vi
              inte kunnat genomföra denna dag.
            </p>
            <p class="text">
              All KÄRLEK från oss
              <font-awesome-icon
                class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
                :icon="['far', 'heart']"
              />
            </p>
            <h4 class="headline4">
              Anita Duverell, Daniel Telford, Henrik Karlsson, Bengt Wehlin,
              Thomas Krøigård Hansen
            </h4>
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
        headline1: 'Insamlings-',
        headline3: 'event',
        headline2:
          'Våra events och arrangemang är det som utgör grunden till våra insamlingar. Varje år kommer vi samman med vårt fantastiska nätverk av företag, föreningar och privatpersoner för att skapa gott.',
      },
      event1: {
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto,w_1200/v1647269525/SFH/site/slagforhjaltar-6.jpg',
      },
      event2: {
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto,w_1200/v1647269652/SFH/site/slagforhjaltar-21.jpg',
      },
      content_2021: {
        body1:
          'Dagens insamling överlämnades på plats till glada representanter från Barndiabetesfonden.',
        headline: 'Vilken lycka!',
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto,w_1024/v1682673805/SFH/eventphotos/2021.jpg',
      },
      content_2022: {
        body1:
          'Dagens insamling överlämnades på plats till glada representanter från Barndiabetesfonden och Nätverket prosit.',
        headline: 'Underbart!',
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto,w_1024/v1682673805/SFH/eventphotos/2022_2.jpg',
      },
      content_2023: {
        body1: 'Vi ser så mycket fram emot årets tävling på Allerum GK.',
        headline: 'Förväntansfulla',
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto,w_1024/v1682674252/SFH/eventphotos/2023.jpg',
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
