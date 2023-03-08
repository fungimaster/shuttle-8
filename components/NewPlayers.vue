<template>
  <div>
    <h1>{{ teamId }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label class="block text mb-0" for="orgno">
          Org. nr
          <span v-if="!validateOrgno || !form.orgno.length" class="text-red-600"
            >*</span
          >
        </label>
        <input
          id="orgno"
          v-model="form.orgno"
          :state="validateOrgno"
          placeholder="555555-5555"
          required
          class="appearance-none w-full block bg-stone-50/20 text-md border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
          type="text"
        />

        <span v-if="!validateOrgno" class="text-rose-600 text-xs italic"
          >Format org nr: 555555-5555</span
        >
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label class="block text mb-0" for="player1">
          Golf ID spelare 1
          <span
            v-if="!validatePlayer1 || !form.player1.length"
            class="text-red-600"
            >*</span
          >
        </label>
        <input
          id="player1"
          v-model="form.player1"
          :state="validatePlayer1"
          placeholder="750101-001"
          required
          class="appearance-none block w-full bg-stone-50/20 text-md border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
          type="text"
          @change="getPlayer('1', form.player1)"
        />
        <span v-if="id_player_1" class="text-xs">{{ id_player_1 }}</span>
        <span v-if="!validatePlayer1" class="text-red-600 text-xs italic block"
          >Format golf-id: 750101-001</span
        >
      </div>
      <div>
        <label class="block text mb-0" for="mobile">
          Golf ID spelare 2
          <span
            v-if="!validatePlayer2 || !form.player2.length"
            class="text-red-600"
            >*</span
          >
        </label>
        <input
          id="player2"
          v-model="form.player2"
          :state="validatePlayer2"
          placeholder="750101-001"
          inputmode="numeric"
          pattern="[- +()0-9]+"
          required
          class="appearance-none block w-full bg-stone-50/20 text-md border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
          type="text"
          @change="getPlayer('2', form.player2)"
        />
        <span v-if="id_player_2" class="text-xs">{{ id_player_2 }}</span>
        <span v-if="!validatePlayer2" class="text-red-600 text-xs italic block"
          >Format golf-id: 750101-001</span
        >
      </div>
      <div>
        <label class="block text mb-0" for="mobile">
          Golf ID spelare 3
          <span
            v-if="!validatePlayer3 || !form.player3.length"
            class="text-red-600"
            >*</span
          >
        </label>
        <input
          id="player3"
          v-model="form.player3"
          :state="validatePlayer3"
          placeholder="750101-001"
          required
          class="appearance-none block w-full bg-stone-50/20 text-md border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
          type="text"
          @change="getPlayer('3', form.player3)"
        />
        <span v-if="id_player_3" class="text-xs">{{ id_player_3 }}</span>
        <span v-if="!validatePlayer3" class="text-red-600 text-xs italic block"
          >Format golf-id: 750101-001</span
        >
      </div>
      <div>
        <label class="block text mb-0" for="mobile">
          Golf ID spelare 4
          <span
            v-if="!validatePlayer4 || !form.player4.length"
            class="text-red-600"
            >*</span
          >
        </label>
        <input
          id="player4"
          v-model="form.player4"
          :state="validatePlayer4"
          placeholder="750101-001"
          required
          class="appearance-none block w-full bg-stone-50/20 text-md border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
          type="text"
          @change="getPlayer('4', form.player4)"
        />
        <span v-if="id_player_4" class="text-xs">{{ id_player_4 }}</span>
        <span v-if="!validatePlayer4" class="text-red-600 text-xs italic block"
          >Format golf-id: 750101-001</span
        >
      </div>
    </div>
    <small v-if="!showCartSection" class="block py-5"
      ><a href="#" class="text-pink-hero pt-5" @click="showCartSection = true"
        >Visa tillval för golfbilar</a
      ></small
    >
    <small v-if="showCartSection"
      ><a
        href="#"
        class="text-pink-hero"
        @click="
          ;(showCartSection = false),
            (form.cart = null),
            (form.cart_no = null),
            (form.cart_why = null)
        "
        >Dölj tillval för golfbilar</a
      ></small
    >

    <div v-if="showCartSection">
      <!-- ALERT -->
      <div
        class="text-white px-6 py-6 border-0 rounded relative mb-4 bg-red-400 mt-10"
      >
        <span class="text-xl inline-block mr-5 align-middle">
          <font-awesome-icon class="w-7 h-7" :icon="['far', 'bell']" />
        </span>
        <span class="inline-block text align-middle mr-8" style="padding: 0">
          <span class="text-white"
            >Alla golfbilar bokas via Slag för Hjältar. Medicinskt intyg krävs
            och bilar fördelas efter behov och tillgång - kan man avstå så vill
            vi att ni inte anmäler er som behov av golfbil. Tack för
            förståelsen!</span
          >
        </span>
      </div>

      <label class="block text mb-0">
        Behöver ni golfbil(ar) och kan uppvisa medicinskt intyg?
      </label>

      <input
        id="cartcheck"
        v-model="form.cart"
        class="mr-2 leading-tight"
        type="checkbox"
      />
      <label
        for="cartcheck"
        class="appearance-none w-full text-md leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
      >
        Ja
      </label>

      <div v-if="form.cart">
        <label class="block text mb-0" for="cart_no">
          Antal golfbilar
          <span v-if="!validateCartNo && form.cart" class="text-red-600"
            >*</span
          >
        </label>
        <input
          id="cart_no"
          v-model="form.cart_no"
          min="1"
          max="2"
          :state="validateCartNo"
          required
          class="appearance-none block w-full bg-stone-50/20 text-md border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
          type="number"
        />
      </div>
      <div v-if="form.cart">
        <label class="block text mb-0" for="cart_why"> Fritext golfbil </label>
        <input
          id="cart_why"
          v-model="form.cart_why"
          class="appearance-none block w-full bg-stone-50/20 text-md border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
          type="text"
        />
      </div>
    </div>
    <div class="col-span-2">
      <label class="block text mb-0 mt-4" for="message"> Meddelande </label>
      <textarea
        id="message"
        v-model="form.message"
        class="no-resize appearance-none block w-full bg-stone-50/20 border border-gray-300 rounded text-md py-3 px-4 mb-3 focus:outline-none focus:bg-white focus:border-gray-400 h-48 resize-none"
      ></textarea>
    </div>

    <div class="col-span-2">
      <button
        class="btn-pill btn-lg bg-white mt-5 disabled:bg-white"
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
        v-if="showToastFailOrg"
        class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-800 mt-10"
      >
        <span class="text-xl inline-block mr-5 align-middle">
          <i class="fas fa-bell" />
        </span>
        <span class="inline-block text align-middle mr-8" style="padding: 0">
          <span class="text-white"> Kontrollera organisationsnummer</span>
        </span>
        <button
          class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
        >
          <span @click="showToastFailOrg = false">×</span>
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
          <span class="text-white">Något gick fel...</span>
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
      showToastFailOrg: false,
      showCartSection: false,
      teamId: '',
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
        return false
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
      return this.validateHelper(this.form.player1, 1)
    },
    validatePlayer2() {
      return this.validateHelper(this.form.player2, 2)
    },
    validatePlayer3() {
      return this.validateHelper(this.form.player3, 3)
    },
    validatePlayer4() {
      return this.validateHelper(this.form.player4, 4)
    },
    validateForm() {
      if (
        this.validateOrgno &&
        this.validatePlayer1 &&
        this.validatePlayer2 &&
        this.validatePlayer3 &&
        this.validatePlayer4
      ) {
        return true
      }
      return false
    },
  },
  created() {
    this.teamId = this.$route.params.id
  },
  methods: {
    validateHelper(player, playerNumber) {
      if (!player) {
        return true
      }
      let validated = false

      const re = /^[- ]*[0-9][- 0-9]*$/
      if (re.test(player)) {
        if (player.length === 6) {
          this.form['player' + playerNumber] = player + '-'

          validated = true
        }

        if (player.length === 10) {
          validated = true
        } else {
          validated = false
        }
      }

      return validated
    },
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
            } else if (response.error) {
              this['id_player_' + player] =
                'Ingen spelare hittades. Ange ditt Golf-ID med de 6 första siffrorna i ditt personnummer och sedan 3 siffror efter bindestrecket.'
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
      this.showToastFailOrg = false

      if (!this.validateOrgno) {
        this.showToastFailOrg = true
        return
      }

      if (!this.validatePlayers()) {
        this.showToastFailUnique = true
        return false
      } else {
        this.showToastFailUnique = false
      }

      if (this.validateForm) {
        this.$axios
          .$post(this.$config.baseURL, {
            method: 'registerTeamPlayers',
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