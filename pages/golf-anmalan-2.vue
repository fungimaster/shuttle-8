<template>
  <div>
    <div
      class="container mx-auto relative pb-1 md:py-10 grid gap-5 grid-cols-1 place-content-center px-8 md:px-16 py-10"
    >
      <h1
        class="text-center md:text-left leading-normal md:text-6xl text-pink-hero text-4xl tracking-wider break-words"
      >
        {{ hero.headline1 }}
      </h1>
      <p>{{ hero.headline2 }}</p>
    </div>

    <div class="container mx-auto px-8 md:px-16 pt-2">
      <div class="grid grid-cols-1 md:grid-cols-1 gap-10 mt-2">
        <NewPlayers />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      layout: 'golf-anmalan-layout',

      hero: {
        headline1: 'Registrera spelare',
        headline2:
          'Här fyller ni i spelarna för ert lag. Ange samma organisationsnummer som i anmälan av laget.',
      },
      list: ['kärlek', 'glädje', 'gemenskap', 'engagemang'],
    }
  },
  methods: {},
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

label {
  padding-bottom: 0.25em !important;
}
</style>
