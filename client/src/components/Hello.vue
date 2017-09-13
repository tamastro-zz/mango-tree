<template>
  <div>
    <img :src="imageUrl['.value']"/>
    <br>
    <p v-if="started">Growing...</p>
    <p v-if="phaseVal >= 2">Done!</p>
    <button type="button" name="start" @click="start">Start</button>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      started: false,
      done: false
    }
  },
  firebase () {
    return {
      url: {
        source: this.$db.ref('grow/src'),
        asObject: true
      },
      phase: {
        source: this.$db.ref('grow/phase'),
        asObject: true
      }
    }
  },
  computed: {
    imageUrl () {
      return this.url['.value'] !== null ? this.url : {'.value': 'http://www.eggnutritioncenter.org/content/themes/wojo-theme/assets/dist/img/eggfacts.png'}
    },
    phaseVal () {
      return this.phase['.value']
    }
  },
  methods: {
    start () {
      this.$db.ref('grow').set(null)
      this.$http.get('/start')
      .then(({data}) => {
        this.started = true
      })
      .catch(err => console.log(err))
    }
  }
}
</script>
