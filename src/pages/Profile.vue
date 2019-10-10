<template>
  <q-page class="flex flex-center">
    <div>
    <div v-if="profile.id">
      <div class="q-title"></div>
      <p><img :src="profile.picture" ></p>
      <p>{{ profile.given_name }}</p>
      <p>{{ profile.last_name }}</p>
      <a :href="`mailto:${profile.email}`"> {{profile.email}}</a>
      <p>{{ profile.gender }}</p>
      <p>{{ profile.locale }}</p>
      <a :href="profile.profile" target="_blank">Profile</a>
    </div>
  </div>
  </q-page>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      profile: {}
    }
  },
  mounted () {
    this.getProfile('google')
  },
  methods: {
    getProfile (network) {
      if (this.$hello.getAuthResponse(network) == null) {
        return
      }
      this.$hello(network).api('me')
        .then((res) => {
          console.log(res)
          this.profile = res
        })
    }
  }
}
</script>
