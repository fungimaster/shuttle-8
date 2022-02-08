

<template>
  <div>
    <CoolLightBox :items="items" :index="index" @close="index = null">
    </CoolLightBox>

    <div
      class="grid-cols-3 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-2"
    >
      <div
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        class="w-full col-span-1 row-span-1 rounded"
      >
        <img :src="image" @click="index = imageIndex" class="object-contain" />
      </div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  components: {
    CoolLightBox,
  },
  data() {
    return {
      items: [
        'https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625313/slagforhjaltar-49_vjz3zv.jpg',
        'https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625884/slagforhjaltar-15_uvgc5d.jpg',
        'https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625313/slagforhjaltar-49_vjz3zv.jpg',
        'https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643621911/slagforhjaltar-6_uma48u.jpg',
        'https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625282/slagforhjaltar-26_e7wuvd.jpg',
        'https://res.cloudinary.com/dk1b2ytfl/image/upload/v1643625254/slagforhjaltar-9_rs8lpa.jpg',
      ],
      index: null,
    }
  },
}
</script>


