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
      <TextAndImage :content="event1" :showicon="false">
        <template #content>
          <h3 class="headline3">
            <span
              class="
                w-10
                h-10
                shadow-lg
                rounded-full
                bg-pink-hero
                inline-flex
                items-center
                justify-center
              "
            >
              <font-awesome-icon
                class="w-7 h-7 text-white overflow-visible"
                :icon="['far', 'heart']"
              />
            </span>

            2021 - Nytt år och nya möjligheter!
          </h3>
          <p class="text">
            Inbjudan till 2021 års golftävling i Insamlingsstiftelsen Slag För
            Hjältars regi.
          </p>
          <p class="text">
            Varmt välkomna till vår gemenskap genom att anmäla ett lag till
            årets unika upplaga av Slag För Hjältars Golf. Förutom spännande
            golfspel ser vi fram emot att dela en kul dag ihop med mycket
            kärlek, engagemang och glädje!
          </p>
          <h4 class="headline4 pt-5">Hjältegolf - Som vår hjälte bidrar du</h4>
          <p class="text">
            Lagavgiften går 100% till stiftelsens insamling. Utdelningen görs
            till, av stiftelsen, utsedda mottagare däribland Barncancerfonden
            Södra och Ellas Hjältar
          </p>
          <h4 class="headline4 pt-5">Som vår hjälte får du</h4>
          <p class="text">
            Spel för fyra personer Frukost, diverse mat och förfriskningar på
            banan samt mat efter tävlingen. Generöst prisbord Exponering på
            plats, sociala medier samt på SFHs hemsida. Insamlingsstiftelsen
            Slag för Hjältar möjliggör en bättre tillvaro för barn och unga.
            Genom evenemang tillsammans med förening- och näringslivet donerar
            vi insamlade medel till icke vinstdrivande organisationer som
            arbetar inom vård, hälsa och omsorg.
          </p>
          <p class="text">
            Anmäl dig snarast genom att maila info@slagforhjältar.se Varma
            välkomsthälsningar från styrelsen
          </p>
          <h5 class="headline5 pt-5">
            Slag för hjältar -Insamlingsstiftelsen – Vi gör det med kärlek!
          </h5>
        </template>
      </TextAndImage>

      <ImageAndText :content="event1">
        <template #content>
          <h3 class="headline3">
            <span
              class="
                w-10
                h-10
                shadow-lg
                rounded-full
                bg-pink-hero
                inline-flex
                items-center
                justify-center
              "
            >
              <font-awesome-icon
                class="w-7 h-7 text-white overflow-visible"
                :icon="['far', 'heart']"
              />
            </span>

            2020 Nu kör vi en avslutande insamling för året!
          </h3>
          <h4 class="headline4 pt-5">
            Följ oss på vår Facebook sida under #julförhjältar
          </h4>
          <p class="text">
            Vi kommer att avsluta året med att hjälpa tre av våra fantastiska
            samarbetsorganisationer i deras arbete – ett arbete som är än mer
            viktigt i dessa tider av social distansering och med begränsade
            möjligheter till ett funktionellt liv när man befinner sig i utsatta
            livsöden. Vi behöver nu din hjälp! Vill du göra en god gärning?
          </p>
          <h4 class="headline4 pt-5">Såhär tänker vi:</h4>
          <p class="text">
            Vi har valt att skänka pengar till Ellas Hjältar, Barncancerfonden
            Södra och Jontefonden detta år och kommer initialt skänka 25 000 kr
            till respektive organisation. Med er hjälp kan vi få in mer pengar
            som kan förgylla deras verksamhet ytterligare. För varje insamlad
            krona kommer vi i Slag för Hjältar att matcha det med lika mycket
            till – så länge våra egna insamlade medel räcker till. Vi har
            ytterligare 150 000 kr kvar att dela ut. Hjälp oss att dela ut varje
            krona! Vill ni dedikera ert insamlade medel till någon av
            organisationerna går det bra att göra så genom att skriva deras namn
            i er inbetalning. Annars delas alla medel ut jämt mellan mottagarna.
          </p>
          <h4 class="headline4 pt-5">Swish: 123-5584784</h4>
          <p class="text">
            Glöm inte – en donerad krona till oss är en krona som når sin
            mottagare!
          </p>
          <p class="text">
            PS. Vi gör även gärna anpassade upplägg till ert företag som vill
            vara med och bidra med ett valfritt belopp – maila intresse till
            henrik@slagforhjaltar.se
          </p>
        </template>
      </ImageAndText>
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
        imgurl:
          'https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625254/slagforhjaltar-9_rs8lpa.jpg',
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
