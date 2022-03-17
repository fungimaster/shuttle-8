

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
        'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269652//SFH/site/slagforhjaltar-21.jpg',
        'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269654/SFH/site/slagforhjaltar-18.jpg',
        'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269653/SFH/site/slagforhjaltar-20.jpg',
        'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269652/SFH/site/slagforhjaltar-19.jpg',
        'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269612/SFH/site/slagforhjaltar-49.jpg',
        'https://res.cloudinary.com/dn3hzwewp/image/upload/q_auto/v1647269593/SFH/site/slagforhjaltar-38.jpg',
      ],
      index: null,
    }
  },
}
</script>


