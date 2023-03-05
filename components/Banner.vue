<template>
  <div
    class="relative isolate flex justify-center gap-x-12 overflow-hidden bg-gray-100 py-2.5 px-6 sm:px-3.5 sm:before:flex-1"
  >
    <svg
      viewBox="0 0 577 310"
      aria-hidden="true"
      class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-3xl"
    >
      <path
        id="1d77c128-3ec1-4660-a7f6-26c7006705ad"
        fill="#E7B8CF"
        fill-opacity="0.2"
        d="m142.787 168.697-75.331 62.132L.016 88.702l142.771 79.995 135.671-111.9c-16.495 64.083-23.088 173.257 82.496 97.291C492.935 59.13 494.936-54.366 549.339 30.385c43.523 67.8 24.892 159.548 10.136 196.946l-128.493-95.28-36.628 177.599-251.567-140.953Z"
      />
      <defs>
        <linearGradient
          id="49a52b64-16c6-4eb9-931b-8e24bf34e053"
          x1="614.778"
          x2="-42.453"
          y1="26.617"
          y2="96.115"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9089FC" />
          <stop offset="1" stop-color="#FF80B5" />
        </linearGradient>
      </defs>
    </svg>
    <svg
      viewBox="0 0 577 310"
      aria-hidden="true"
      class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 w-[36.0625rem] -translate-y-1/2 transform-gpu blur-2xl"
    >
      <use href="#1d77c128-3ec1-4660-a7f6-26c7006705ad" />
    </svg>
    <div class="flex flex-wrap items-center justify-center gap-y-2 gap-x-4">
      <h3
        class="z-50 text-center headline3 text-pink-dark-hero"
        style="margin-bottom: 0"
      >
        Välkommen årets hjärtligaste golftävling på Allerum Golfklub 26:e maj
      </h3>

      <button
        class="z-50 btn-pill btn-lg bg-white"
        @click="$_handleRouting('/golf-anmalan-1')"
      >
        Till Anmälan <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  </div>
</template>
  
<script>
import { utilityMethodsMixin } from '@/plugins/mixins/utilityMethodsMixin'

export default {
  mixins: [utilityMethodsMixin],
}
</script>
