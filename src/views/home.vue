<template>
    <div class="home">
      {{currLocation}}
      <Geolocation v-if="getPosition"></Geolocation>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Geolocation from '../components/geolocation'

export default {
  data () {
    return {
      getPosition: false
    }
  },
  mounted () {
    this.getPosition = true
  },
  components: { Geolocation },
  computed: {
    ...mapGetters(['currLocation'])
  }
}
</script>

<style scoped>
</style>
