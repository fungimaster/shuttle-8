export default {
  SET_TEST_DATA(state, payload) {
    state.test = payload
  },
  SET_FUND_TOTAL(state, payload) {
    state.funds_total = payload
  },
  SET_EVENTS(state, payload) {
    state.events = payload.events
  },
  SET_PHOTOS(state, payload) {
    state.photos = payload.photos
  }
}
