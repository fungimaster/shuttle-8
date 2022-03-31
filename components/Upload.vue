<template>
  <div>
    <div class="image-upload w-20">
      <Spinner v-if="loading" />
      <label
        v-if="!loading"
        :for="eventid"
        class="cursor-pointer text-white hover:text-pink-hero"
      >
        <span class="py-2 px-7 rounded block bg-pink-dark-hero">
          <font-awesome-icon class="w-7 h-7" :icon="['far', 'camera']" />
        </span>
      </label>
      <input
        v-if="!loading"
        class="inputfile"
        type="file"
        :id="eventid"
        @change="onUpload($event)"
        accept=".jpg, .png"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    eventid: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      file: null,
      loading: false,
    }
  },
  methods: {
    ...mapActions('events', ['uploadFile']),

    onUpload(event) {
      this.file = event.target.files[0]

      this.loading = true

      setTimeout(() => {
        this.loading = false
      }, 1000)
      const promise = this.uploadFile({
        file: this.file,
        eventid: this.eventid,
      })

      promise.then(() => {
        this.file = null
        this.loading = false
      })
    },
  },
}
</script>

<style scoped>
.image-upload > input {
  display: none;
  cursor: pointer;
}
</style>
