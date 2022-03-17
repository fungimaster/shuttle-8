<template>
  <div>
    <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625332/slagforhjaltar-3_lkn6on.jpg"
    >
      <template #svg>
        <SvgTeam />
      </template>
    </HeroSection>

    <ImageAndText :content="content1">
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
    </ImageAndText>
    <TextAndImage :content="content2" :showicon="false">
      <template #content>
        <p class="text">
          Idag är vi stolta att se stiftelsens insatser ta varierade skepnader
          genom olika gemensamma aktiviteter med framförallt ett engagerat
          näringsliv kopplat till styrelsen.
        </p>
        <p class="text">
          Insamlingsstiftelsen Slag för Hjältar möjliggör en bättre tillvaro för
          barn och unga. Genom evenemang tillsammans med förening- och
          näringslivet donerar vi insamlade medel till icke vinstdrivande
          organisationer som arbetar inom vård, hälsa och omsorg.
        </p>
      </template>
    </TextAndImage>
    <div class="container mx-auto px-8 md:px-16 pt-20">
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
        headline2: 'Våra värdeord är kärlek, glädje, gemenskap och engagemang',
      },
      content1: {
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269548/SFH/site/slagforhjaltar-13.jpg',

        list: [],
      },
      content2: {
        imgurl:
          'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269554/SFH/site/slagforhjaltar-15.jpg',
        list: ['kärlek', 'glädje', 'gemenskap', 'engagemang'],
      },
      profile3: {
        name: 'Thomas Hansen',
        title: 'Hoteldirektör',
        location: 'Skåne',
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
        location: '',
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
