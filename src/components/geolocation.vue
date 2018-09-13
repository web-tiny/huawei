<template>
  <iframe id="geoPage" width=0 height=0 frameborder=0  style="display:none;" scrolling="no" allow="geolocation" src="https://apis.map.qq.com/tools/geolocation?key=U4XBZ-OPZCP-YBPDN-VGSAF-BPRBZ-KPBL7&referer=saiCoreLbs"></iframe>
</template>

<script>
import { mapGetters } from 'vuex'
import { isEmptyObject } from '../lib/lib.js'

export default {
  mounted () {
    window.addEventListener('message', this.getPosition, false)
    setTimeout(() => {
      isEmptyObject(this.position) && this.$store.dispatch('setCurrLocation', '暂时无法获取您的位置信息')
    }, 12000)
  },
  computed: {
    ...mapGetters(['position'])
  },
  methods: {
    getPosition (event) {
      const location = event.data

      if (location && location.module === 'geolocation') {
        this.$store.dispatch('setPosition', {
          lat: event.data.lat,
          lng: event.data.lng,
          address: event.data.addr,
          city: event.data.city,
          district: event.data.district
        })
      }
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
