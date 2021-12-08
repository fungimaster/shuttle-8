export const utilityMethodsMixin = {
  methods: {
    $_handleRouting(route, externalurl) {
      // EXTERNAL URL
      if (externalurl) {
        window.open(route)
        return
      }

      // HTML-ELEMENT
      if (route.charAt(0) === '#') {
        this.$scrollTo(route, 500, { offset: -50 })

        return
      }
      if (this.$router.currentRoute.path === route) {
        return true
      } else {
        this.$router.push(route)
      }
    },
    $_addToUrl(url, stringToAdd) {
      if (!url) {
        return
      }
      const array = url.split('upload/')
      array.splice(1, 0, 'upload/' + stringToAdd + '/')
      const urlString = array.join('')

      return urlString
    },
  },
}
