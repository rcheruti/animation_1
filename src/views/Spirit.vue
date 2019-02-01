<template>
  <div>
    <div class="spiritBox">
      <div class="spirit" ref="spirit"></div>
    </div>
    <button @click="spirit">Spirits</button>
  </div>
</template>

<script>
import anime from 'animejs' 

export default {
  data() {
    return {
      spirits: false ,
      anim: null
    }
  },
  methods: {
    spirit() {
      this.spirits ? this._stopAnim() : this._startAnim()
      this.spirits = !this.spirits
    },

    _startAnim() {
      if ( this.anim ) {
        if( this.anim.completed ) anime.set(this.$refs.spirit, { opacity: 0, translateY: 0 })
        this.anim.pause()
      }
      let entrada = anime.timeline({ targets: this.$refs.spirit, autoplay: true, duration: 1600 })
      entrada.add({ opacity: 1, easing: 'linear' }, 0)
      entrada.add({ translateY: -150, easing: 'easeInOutCubic' }, 0)
      entrada.add({ complete: () => {
        let meio = anime.timeline({ targets: this.$refs.spirit, autoplay: true, 
                                    duration: 2400, loop: true, direction: 'alternate' })
        meio.add({ translateY: -90, easing: 'easeInOutCubic' }, 0)
        this.anim = meio
      } }, 0)
      this.anim = entrada
    },
    _stopAnim() {
      if ( this.anim ) this.anim.pause()
      let saida = anime.timeline({ targets: this.$refs.spirit, autoplay: true, duration: 800 })
      saida.add({ opacity: 0, easing: 'linear' }, 0)
      saida.add({ translateY: -250, easing: 'easeOutCubic' }, 0)
      this.anim = saida
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  display: block;
  margin: 0 auto 0;
  font-size: 24px;
  padding: 16px 40px;
  z-index: 2;
  transform: translate(0,0);
}
.spiritBox {
  display: block;
  height: 1px;
  width: 120px;
  margin: 180px auto 0;
  z-index: 1;
}
.spirit {
  background: #ccc;
  height: 160px;
  width: 120px;
  border-radius: 50%;
  opacity: 0;
}
</style>
