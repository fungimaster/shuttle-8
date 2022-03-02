<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <label class="block text mb-2" for="grid-password"> Namn </label>
        <input
          v-model="name"
          class="
            appearance-none
            block
            w-full
            bg-gray-50
            text
            border border-gray-200
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none focus:bg-white focus:border-gray-300
          "
          id="email"
          type="email"
        />
      </div>
      <div>
        <label class="block text mb-2" for="grid-password"> E-post </label>
        <input
          v-model="email"
          class="
            appearance-none
            block
            w-full
            bg-gray-50
            text
            border border-gray-200
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none focus:bg-white focus:border-gray-300
          "
          id="email"
          type="email"
        />
      </div>
    </div>
    <div class="col-span-2">
      <label class="block text mb-2" for="grid-password"> Meddelande </label>
      <textarea
        v-model="message"
        class="
          no-resize
          appearance-none
          block
          w-full
          bg-gray-50
          border border-gray-200
          rounded
          text
          py-3
          px-4
          mb-3
          focus:outline-none focus:bg-white focus:border-gray-300
          h-48
          resize-none
        "
        id="message"
      ></textarea>
    </div>
    <div class="col-span-2">
      <button
        @click="sendMessage"
        class="btn-pill btn-lg bg-white mt-5"
        type="button"
      >
        Skicka
        <font-awesome-icon
          class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
          :icon="['far', 'heart']"
        />
      </button>
      <div
        v-if="showToast"
        class="
          text-white
          px-6
          py-4
          border-0
          rounded
          relative
          mb-4
          bg-pink-dark-hero
          mt-10
        "
      >
        <span class="text-xl inline-block mr-5 align-middle">
          <i class="fas fa-bell" />
        </span>
        <span class="inline-block text align-middle mr-8" style="padding: 0">
          <span class="text-white"> Meddelande skickat</span>
        </span>
        <button
          class="
            absolute
            bg-transparent
            text-2xl
            font-semibold
            leading-none
            right-0
            top-0
            mt-4
            mr-6
            outline-none
            focus:outline-none
          "
        >
          <span>×</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      name: '',
      message: '',
      showToastStatus: false,
    }
  },
  methods: {
    sendMessage() {
      console.log(
        '%c 👊',
        'color: #007acc;',
        this.email,
        this.name,
        this.message
      )

      this.name = ''
      this.email = ''
      this.message = ''
      this.showToastStatus = true
      setTimeout(() => {
        this.showToastStatus = false
      }, 3000)
    },
  },
  computed: {
    showToast() {
      return this.showToastStatus
    },
  },
}
</script>