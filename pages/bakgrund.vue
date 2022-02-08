<template>
  <div>
    <HeroSection4
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625332/slagforhjaltar-3_lkn6on.jpg"
    >
      <template #svg>
        <SvgTeam
          class="md:float-right hidden md:block absolute top-0 left-60"
        />
        <SvgTeam class="md:hidden absolute top-60 left-28" />
      </template>
    </HeroSection4>
    <!--  <HeroSection
      :headline1="hero.headline1"
      :headline2="hero.headline2"
      color="text-white"
      imgurl="https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625332/slagforhjaltar-3_lkn6on.jpg"
    /> -->
    <ImageAndText :content="content1" />
    <TextAndImage :content="content2" :showicon="false" />
    <div class="container mx-auto px-4 md:px-16 pt-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
        <Profile :profile="profile1" />
        <Profile :profile="profile1" />
        <Profile :profile="profile1" />
        <Profile :profile="profile1" />
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
        body1:
          'Engagemanget började redan 2015 sedan en nära väns dotter till en av våra grundare, Daniel Telford, drabbades av cancer. Daniel ville personligen göra något och det hela resulterade i några års arrangemang av golftävlingar bland vänner och affärsbekanta. Mottagare av insamlade medel de första åren var Barncancerfonden Södra.',
        body2:
          'Intresset kring initiativet växte och tillsammans med Henrik Karlsson och Bengt Wehlin skapades Insamlingsstiftelsen Slag för Hjältar år 2019. En insamlingsstiftelse som genom insamlade medel ska stötta föreningar och organisationer som arbetar med att hjälpa barn och unga med olika behov. Under våren förstärktes styrelsen med ytterligare två eldsjälar – Anita Duverell och Thomas Krøigård Hansen – och det ideella arbetet med att utveckla stiftelsens sätt att hjälpa påbörjades.',
        headline: 'Vi är stiftelsen som alltid gör allt med kärlek!',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/allerum-golf-2.jpg',
        list: [],
      },
      content2: {
        body1:
          'Idag är vi stolta att se stiftelsens insatser ta varierade skepnader genom olika gemensamma aktiviteter med framförallt ett engagerat näringsliv kopplat till styrelsen.',
        body2:
          'Insamlingsstiftelsen Slag för Hjältar möjliggör en bättre tillvaro för barn och unga. Genom evenemang tillsammans med förening- och näringslivet donerar vi insamlade medel till icke vinstdrivande organisationer som arbetar inom vård, hälsa och omsorg.',
        headline: '',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/allerum-golf-2.jpg',
        list: ['kärlek', 'glädje', 'gemenskap', 'engagemang'],
      },
      profile1: {
        name: 'Thomas Hansen',
        title: 'Hoteldirektör',
        location: 'Skåne',
        presentation:
          'Till vardags är jag hotelldirektör på Scandic Helsingborg Nord. Min familj består av min sambo, mina två döttrar och en bonusson. Jag är väldigt social och gillar att träffa och umgås med människor. Den fritid som blir över lägger jag gärna på golf – och padelspel. ',
        imgurl:
          'https://slagforhjaltar.se/wp-content/uploads/2021/03/3-480x600-1.jpg',
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
