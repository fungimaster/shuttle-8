<template>
  <div class="">
    <div class="px-6">
      <img
        alt="..."
        src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
        class="shadow-lg rounded-full max-w-full mx-auto"
        style="max-width: 120px"
      />
      <div class="pt-6 text-center">
        <h5 class="text-xl font-bold">{{ name }}</h5>
        <p class="mt-1 text-sm text-gray-500 uppercase font-semibold">
          Founder and CEO
        </p>
        <div class="mt-6">
          <button
            class="
              bg-pink-500
              text-white
              w-8
              h-8
              rounded-full
              outline-none
              focus:outline-none
              mr-1
              mb-1
            "
            type="button"
          >
            <i class="fab fa-dribbble"></i></button
          ><button
            class="
              bg-red-600
              text-white
              w-8
              h-8
              rounded-full
              outline-none
              focus:outline-none
              mr-1
              mb-1
            "
            type="button"
          >
            <i class="fab fa-google"></i></button
          ><button
            class="
              bg-blue-400
              text-white
              w-8
              h-8
              rounded-full
              outline-none
              focus:outline-none
              mr-1
              mb-1
            "
            type="button"
          >
            <i class="fab fa-twitter"></i></button
          ><button
            class="
              bg-gray-800
              text-white
              w-8
              h-8
              rounded-full
              outline-none
              focus:outline-none
              mr-1
              mb-1
            "
            type="button"
          >
            <i class="fab fa-instagram"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name'],
}
</script>