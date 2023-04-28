<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625332/slagforhjaltar-3_lkn6on.jpg"
    >
      <template #svg>
        <SvgWithLove />
      </template>
    </HeroSection>
    <ValueWords :content="valuewords" :showicon="false"> </ValueWords>
    <TextAndImage :content="content2" :showicon="false">
      <template #content>
        <p class="text">
          En av stiftelsens grundare, Daniel Telford, började redan 2015
          arrangera golftävlingar när en nära väns barn drabbades av cancer.
          Mottagare de första åren var Barncancerfonden Södra. I början av 2019
          bildades Insamlingsstiftelsen Slag för Hjältar tillsammans med Henrik
          Karlsson och Bengt Wehlin. Styrelsen förstärktes med Anita Duverell
          och Thomas Krøigård Hansen – och det ideella arbetet med att utveckla
          stiftelsen och dess aktiviteter påbörjades.
        </p>
        <p class="text">
          Idag är vi stolta att se stiftelsens arbete resultera i mängder av
          utbetalningar av våra insamlade medel till icke vinstdrivande
          organisationer som arbetar inom vård, hälsa och omsorg för barn och
          ungas välmående. Vårt engagemang stöttas av det lokala förenings- och
          näringslivet - vilket vi är otroligt tacksamma och ödmjuka inför. Vi
          är också otroligt stolta över att kunna skänka vidare 100% av
          stiftelsens insamlade medel.
        </p>
      </template>
    </TextAndImage>

    <!-- <ImageAndText :content="content1">
      <template #content>
        <h3 class="headline3">
          Vi är stiftelsen som alltid gör allt med kärlek!
        </h3>
        <p class="text">
          Engagemanget började redan 2015 sedan en nära väns dotter till en av
          våra grundare, Daniel Telford, drabbades av cancer. Daniel ville
          personligen göra något och det hela resulterade i några års
          arrangemang av golftävlingar bland vänner och affärsbekanta. Mottagare
          av insamlade medel de första åren var Barncancerfonden Södra.
        </p>
        <p class="text">
          Intresset kring initiativet växte och tillsammans med Henrik Karlsson
          och Bengt Wehlin skapades Insamlingsstiftelsen Slag för Hjältar år
          2019. En insamlingsstiftelse som genom insamlade medel ska stötta
          föreningar och organisationer som arbetar med att hjälpa barn och unga
          med olika behov. Under våren förstärktes styrelsen med ytterligare två
          eldsjälar – Anita Duverell och Thomas Krøigård Hansen – och det
          ideella arbetet med att utveckla stiftelsens sätt att hjälpa
          påbörjades.
        </p>
      </template>
    </ImageAndText> -->
    <div class="container mx-auto px-8 md:px-16 pt-0">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
        <Profile :profile="profile1" />
        <Profile :profile="profile2" />
        <Profile :profile="profile3" />
        <Profile :profile="profile4" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hero: {
        headline1: 'Om stiftelsen',
        headline2:
          'Våra värdeord är ledstjärnor i allt vi gör. Utan dem ingen stiftelse. Vill du stötta vårt arbete att hjälpa barn och unga i utsatta sammanhang - då har du kommit rätt.',
      },
      content1: {
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269548/SFH/site/slagforhjaltar-13.jpg',

        list: ['kärlek', 'glädje', 'gemenskap', 'engagemang'],
      },
      content2: {
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269554/SFH/site/slagforhjaltar-15.jpg',
        // list: ['kärlek', 'glädje', 'gemenskap', 'engagemang'],
      },
      valuewords: {
        list: ['kärlek', 'glädje', 'gemenskap', 'engagemang'],
      },
      profile3: {
        name: 'Thomas Hansen',
        title: 'Hoteldirektör',
        location: 'Skåne',
        email: 'thomas@slagforhjaltar.se',
        presentation:
          'Till vardags är jag hotelldirektör på Scandic Helsingborg Nord. Min familj består av min sambo, mina två döttrar och en bonusson. Jag är väldigt social och gillar att träffa och umgås med människor. Den fritid som blir över lägger jag gärna på golf – och padelspel. ',
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269953/SFH/site/3-480x600-1_zff4vi.jpg',
        imgurlmobile:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/c_crop,g_face,h_400,w_400/r_max/c_scale,w_200/v1647269953/SFH/site/3-480x600-1_zff4vi.jpg',
      },
      profile4: {
        name: 'Daniel Telford',
        title: 'VD',
        location: 'Skåne',
        email: 'daniel@slagforhjaltar.se',
        presentation:
          'Jag är huvudägare av Eriks fönsterputs, delägare och VD på Heberleins samt delägare på Hälsomatlådan. För övrigt älskar jag att umgås med min fru och 2 barn, umgås med vänner, spela golf och se på ishockey. Jag är även engagerad som tränare för min sons fotbollslag i Gantofta IF. ',
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269953/SFH/site/5-480x600-1_mtrrg4.jpg',
        imgurlmobile:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/c_crop,g_face,h_400,w_400/r_max/c_scale,w_200/v1647269953/SFH/site/5-480x600-1_mtrrg4.jpg',
      },
      profile1: {
        name: 'Anita Duverell',
        title: 'VD',
        location: 'Skåne',
        email: 'anita@slagforhjaltar.se',
        presentation:
          'Jag har förmånen att driva eget företag, Business Energizing,  som bidrar till människors hälsa inifrån och ut! Jag är matnörd av rang och tillsammans med mitt intresse för träning har det lagt grunden till varför jag idag jobbar med det som antagligen är det viktigaste för var och en av oss – vår hälsa. Jag jobbar huvudsakligen informativt genom föreläsningar och vetenskapliga tester.  ',
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269953/SFH/site/1-480x600-1_ifytru.jpg',
        imgurlmobile:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/c_crop,g_face,h_400,w_400/r_max/c_scale,w_200/v1647269953/SFH/site/1-480x600-1_ifytru.jpg',
      },
      profile2: {
        name: 'Henrik Karlsson',
        title: '',
        location: 'Skåne',
        email: 'henrik@slagforhjaltar.se',
        presentation:
          'På fritiden umgås jag främst med min familj beståendes av min sambo och 1-åriga dotter. Skulle det därefter finns tid över så träffar ni mig vanligast på golfbanan där min stora hobby och passion ligger. Till vardags driver jag ett säkerhetsföretag som heter Professionell Säkerhet som fokuserar på bla. larm, passage och kameraövervakning till företag och större organisationer / myndigheter med utgångspunkt i Skåne.',
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269953/SFH/site/4-480x600-1_fhwarf.jpg',
        imgurlmobile:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/c_crop,g_face,h_400,w_400/r_max/c_scale,w_200/v1647269953/SFH/site/4-480x600-1_fhwarf.jpg',
      },
      list: ['kärlek', 'glädje', 'gemenskap', 'engagemang'],
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
