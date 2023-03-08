<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label class="block text mb-0" for="company">
          Företagsnamn
          <span v-if="!validateCompany" class="text-rose-600">*</span>
        </label>
        <input
          id="company"
          v-model="form.company"
          :state="validateCompany"
          required
          class="appearance-none block w-full bg-stone-50/20 text-md border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
          type="text"
        />
      </div>
      <div>
        <label class="block text mb-0" for="orgno">
          Org. nr
          <span v-if="!validateOrgno" class="text-rose-600">*</span>
        </label>
        <input
          id="orgno"
          v-model="form.orgno"
          :state="validateOrgno"
          placeholder="555555-5555"
          required
          class="appearance-none block w-full bg-stone-50/20 text-md border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
          type="text"
        />
        <span v-if="!validateOrgno" class="text-rose-600 text-xs italic"
          >Format org nr: 555555-5555</span
        >
      </div>
      <div>
        <label class="block text mb-0" for="contact">
          För- och efternamn kontaktperson
          <span v-if="!validateContact" class="text-rose-600">*</span>
        </label>
        <input
          id="contact"
          v-model="form.contact"
          :state="validateContact"
          required
          class="appearance-none block w-full bg-stone-50/20 text-md border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
          type="text"
        />
      </div>
      <div>
        <label class="block text mb-0" for="email">
          E-post kontaktperson
          <span v-if="!validateEmail" class="text-rose-600">*</span>
        </label>
        <input
          id="email"
          v-model="form.email"
          :state="validateEmail"
          class="appearance-none block w-full bg-stone-50/20 text-md border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
          type="email"
          required
        />
        <span v-if="!validateEmail" class="text-rose-600 text-xs italic"
          >Epost adressen är inte giltig</span
        >
      </div>
      <div>
        <label class="block text mb-0" for="mobile">
          Mobilnummer kontaktperson
          <span v-if="!validateMobile" class="text-rose-600">*</span>
        </label>
        <input
          id="mobile"
          v-model="form.mobile"
          :state="validateMobile"
          required
          class="appearance-none block w-full bg-stone-50/20 text-md border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
          type="string"
        />
      </div>
    </div>
    <div class="col-span-2">
      <label class="block text mb-0 mt-4" for="message"> Meddelande </label>
      <textarea
        id="message"
        v-model="form.message"
        class="no-resize appearance-none block w-full bg-stone-50/20 border border-gray-200 rounded text-md py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-300 h-48 resize-none"
      ></textarea>
    </div>
    <div class="col-span-2">
      <button
        class="btn-pill btn-lg bg-white mt-5"
        type="button"
        @click="sendMessage"
      >
        Skicka
        <font-awesome-icon
          class="w-4 h-4 text-pink-dark-hero overflow-visible inline"
          :icon="['far', 'heart']"
        />
      </button>

      <div
        v-if="showToastSuccess"
        class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-pink-dark-hero mt-10"
      >
        <span class="text-xl inline-block mr-5 align-middle">
          <i class="fas fa-bell" />
        </span>
        <span class="inline-block text align-middle mr-8" style="padding: 0">
          <span class="text-white"> Anmälan skickad</span>
        </span>
        <button
          class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        >
          <span @click="showToastSuccess = false">×</span>
        </button>
      </div>
      <div
        v-if="showToastFailUnique"
        class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-800 mt-10"
      >
        <span class="text-xl inline-block mr-5 align-middle">
          <i class="fas fa-bell" />
        </span>
        <span class="inline-block text align-middle mr-8" style="padding: 0">
          <span class="text-white"> Golf-id är inte unika för spelarna</span>
        </span>
        <button
          class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        >
          <span @click="showToastFailUnique = false">×</span>
        </button>
      </div>
      <div
        v-if="showToastFail"
        class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-400 mt-10"
      >
        <span class="text-xl inline-block mr-5 align-middle">
          <i class="fas fa-bell" />
        </span>
        <span class="inline-block text align-middle mr-8" style="padding: 0">
          <span class="text-white"> Fyll i alla fält</span>
        </span>
        <button
          class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        >
          <span @click="showToastFail = false">×</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        company: '',
        contact: '',
        orgno: '',
        email: '',
        mobile: '',
        player1: '',
        player2: '',
        player3: '',
        player4: '',
        message: '',
        cart: false,
        cart_no: 0,
        cart_why: '',
      },
      id_player_1: null,
      id_player_2: null,
      id_player_3: null,
      id_player_4: null,
      showToastSuccess: false,
      showToastFail: false,
      showToastFailUnique: false,
    }
  },
  computed: {
    showToast() {
      return this.showToastStatus
    },
    validateCompany() {
      if (this.form.company.length < 2) {
        return false
      }
      return true
    },
    validateOrgno() {
      if (this.form.orgno === '') {
        return true
      }

      if (/^\d{6}(?:\d{2})?[-\s]?\d{4}\r?$/.test(this.form.orgno)) {
        return true
      }
      return false
    },
    validateContact() {
      if (this.form.contact.length < 6) {
        return false
      }
      return true
    },
    validateEmail() {
      if (this.form.email.length < 4) {
        return true
      }

      if (/^\w+(\.-]?\w+)*@\w+(\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
        return true
      }
      return false
    },
    validateMobile() {
      if (this.form.mobile.length < 9) {
        return false
      }
      return true
    },
    validateCartNo() {
      if (this.form.cart_no > 2 || this.form.cart_no < 1) {
        return false
      }
      return true
    },
    validatePlayer1() {
      if (!this.form.player1) {
        return true
      }

      if (/^\d{6}(?:\d{2})?[-\s]?\d{3}\r?$/.test(this.form.player1)) {
        return true
      }

      return false
    },
    validatePlayer2() {
      if (this.form.player2 === '') {
        return true
      }

      if (/^\d{6}(?:\d{2})?[-\s]?\d{3}\r?$/.test(this.form.player2)) {
        return true
      }
      return false
    },
    validatePlayer3() {
      if (this.form.player3 === '') {
        return true
      }

      if (/^\d{6}(?:\d{2})?[-\s]?\d{3}\r?$/.test(this.form.player3)) {
        return true
      }
      return false
    },
    validatePlayer4() {
      if (this.form.player4 === '') {
        return true
      }

      if (/^\d{6}(?:\d{2})?[-\s]?\d{3}\r?$/.test(this.form.player4)) {
        return true
      }
      return false
    },
    validateForm() {
      console.log('%c 👊', 'color: #007acc;', 'validate form')

      if (
        this.validateCompany &&
        this.validateOrgno &&
        this.validateContact &&
        this.validateEmail &&
        this.validateMobile
      ) {
        return true
      }

      console.log('🟡 ---  this.validateMobile:', this.validateMobile)

      console.log('🟡 --- this.validateEmail:', this.validateEmail)

      console.log('🟡 --- this.validateContact:', this.validateContact)

      console.log('🟡 --- this.validateOrgno:', this.validateOrgno)

      console.log('🟡 --- this.validateCompany:', this.validateCompany)

      return false
    },
  },
  methods: {
    getPlayer(player, id) {
      if (this['validatePlayer' + player]) {
        this.$axios
          .$post('https://admin.matchplay.se/methods/getPlayerByGolfid', {
            method: 'getPlayerByGolfid',
            golfid: id,
          })
          .then((response) => {
            console.log(response)
            if (response.notingit) {
              this['id_player_' + player] = 'Ingen spelare hittades'
            } else {
              this['id_player_' + player] =
                response.firstname +
                ' ' +
                response.lastname +
                ' (' +
                response.hcp +
                ')'
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    validatePlayers() {
      let ret = true
      if (this.form.player1 === this.form.player2) {
        ret = false
      }

      if (this.form.player1 === this.form.player3) {
        ret = false
      }

      if (this.form.player1 === this.form.player4) {
        ret = false
      }

      if (this.form.player2 === this.form.player1) {
        ret = false
      }

      if (this.form.player2 === this.form.player3) {
        ret = false
      }

      if (this.form.player2 === this.form.player4) {
        ret = false
      }

      if (this.form.player3 === this.form.player1) {
        ret = false
      }

      if (this.form.player3 === this.form.player2) {
        ret = false
      }

      if (this.form.player3 === this.form.player4) {
        ret = false
      }

      if (this.form.player4 === this.form.player1) {
        ret = false
      }

      if (this.form.player4 === this.form.player2) {
        ret = false
      }

      if (this.form.player4 === this.form.player3) {
        ret = false
      }

      return ret
    },
    sendMessage() {
      this.showToastFailUnique = false
      this.showToastFail = false
      this.showToastSuccess = false

      /*       if (!this.validatePlayers()) {
        this.showToastFailUnique = true
        return false
      } else {
        this.showToastFailUnique = false
      } */

      if (this.validateForm) {
        this.$axios
          .$post(this.$config.baseURL, {
            method: 'registerTeamEmail',
            data: this.form,
          })
          .then((response) => {
            console.log(response)
            this.showToastFail = false
            this.showToastSuccess = true
            this.showToastFailUnique = false
            this.form = {
              company: '',
              contact: '',
              orgno: '',
              email: '',
              mobile: '',
              player1: '',
              player2: '',
              player3: '',
              player4: '',
              message: '',
              cart: false,
              cart_no: 0,
              cart_why: '',
            }
          })
          .catch((error) => {
            console.log(error)
            this.showToastFail = true
            this.showToastSuccess = false
            // this.loading = false;
          })
      } else {
        this.showToastFail = true
      }
    },
  },
}
</script>