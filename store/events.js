import mutations from './events/mutations'
import actions from './events/actions'
import getters from './events/getters'

export default {
  namespaced: true,
  state() {
    return {
      test: '',
      founds_total: '',
      events: null,
    }
  },
  mutations,
  actions,
  getters,
}
