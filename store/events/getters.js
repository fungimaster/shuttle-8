export default {
  getTest(state) {
    return state.test
  },
  getFundsTotal(state) {
    return state.funds_total
  },
  getEvents(state) {
    return state.events
  },
  getEvent: (state) => (id) => {
    if (!state.events) {
      return
    }

    return state.events.find((e) => e._id === id)
  },
}
