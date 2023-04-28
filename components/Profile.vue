<template>
  <div
    class="max-w-4xl flex items-center items-center justify-center h-auto flex-wrap my-10 lg:my-0"
  >
    <!--Main Col-->
    <div
      id="profile"
      class="w-full lg:w-4/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 lg:mx-0 mt-20"
      style="height: 700px"
    >
      <div class="p-4 md:p-12 text-center">
        <!-- Image for mobile view-->
        <div
          class="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
          :style="'background-image: url(' + profile.imgurlmobile + ')'"
        ></div>

        <h3 class="headline3 pt-10">{{ profile.name }}</h3>
        <div
          class="mx-auto w-4/5 pt-3 border-b-2 border-pink-dark-hero opacity-25"
        ></div>

        <p class="pt-8 tracking-wider">
          {{ profile.presentation }}
        </p>

        <div class="pt-12 pb-8">
          <a :href="'mailto:' + profile.email">
            <button
              class="bg-pink-dark-hero hover:bg-purple-hero text-white font-bold py-2 px-8 md:px-16 rounded-full"
            >
              Kontakta mig
            </button>
          </a>
        </div>

        <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
      </div>
    </div>

    <!--Img Col-->
    <div class="hidden w-full lg:w-1/5">
      <!-- Big profile image for side bar (desktop) -->
      <img
        :src="profile.imgurl"
        class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
      />
      <!-- Image from: http://unsplash.com/photos/MP0IUfwrn0A -->
    </div>
  </div>
</template>

<script>
export default {
  props: ['profile'],
}
</script>