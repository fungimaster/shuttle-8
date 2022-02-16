<template>
  <div class="w-full mr-auto ml-auto">
    <div
      class="
        relative
        flex flex-col
        min-w-0
        break-words
        bg-white
        w-full
        mb-6
        rounded-lg
        shadow-lg
      "
    >
      <img
        alt="..."
        :src="content.imgurl"
        class="object-cover align-middle rounded h-80"
      />
      <blockquote class="relative p-8 mb-4">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          class="absolute left-0 w-full block"
          style="height: 95px; top: -94px"
        >
          <polygon
            points="-30,95 583,95 583,65"
            class="text-white fill-current"
          ></polygon>
        </svg>
        <h3 class="headline3">
          {{ content.headline }}
        </h3>
        <p class="text">
          {{ content.body1 }}
        </p>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
}
</script>