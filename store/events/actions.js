export default {
  fetchTestData({ commit }, params) {
    return new Promise((resolve, reject) => {
      this.$axios
        .$get(this.$config.baseURL)
        .then((response) => {
          console.log('response', response)
          commit('SET_TEST_DATA', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  uploadFile({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      const cloudinaryUrl = this.$config.cloudinary_upload_url
      console.log('cloudinaryUrl', cloudinaryUrl)
      let resourceType = ''

      if (payload.file.type === 'video/mp4') {
        resourceType = 'video'
      } else {
        resourceType = 'image'
      }
      console.log('%c 👊', 'color: #007acc;', resourceType)

      const formData = new FormData()
      formData.append('file', payload.file)
      formData.append('upload_preset', this.$config.cloudinary_preset)

      this.$axios.post(cloudinaryUrl + 'upload', formData)
      /*  .then((res) => {
          const obj = {
            method: 'imgAddPub',
            url: res.data.secure_url,
            publicId: res.data.public_id,
            layoutArea: payload.name,
            resource_type: resourceType,
          }
          this.$axios
            .post(this.$config.baseURL, obj)
            .then(() => {
              commit('REMOVE_BACKGROUND_IMAGE', payload.name)

              dispatch('fetchBackgroundImages', payload.name)
              commit('SET_CONTAINER_UPLOAD', false)
              resolve()
            })
            .catch((error) => {
              reject(error)
            })
        })
        .catch((error) => {
          reject(error)
        }) */
    })
  },
}
