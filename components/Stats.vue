<template>
  <div class="shadow-lg rounded-2xl w-full bg-white dark:bg-gray-800 px-10">
    <div class="flex items-center"></div>
    <div class="flex flex-col justify-start">
      <p class="text-pink-dark-hero text-4xl tracking-wider">
        {{ content.metric }}
        <span class="text-sm"> kr </span>
      </p>
      <div class="flex items-center text-green-500 text-sm">
        <!--  <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"
          ></path>
        </svg> -->
        <span class="text">
          {{ content.tagline }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
}
</script>