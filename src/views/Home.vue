<template>
  <div class="home" ref="home">
    <svg height="480" width="800" @mousedown="iniciar" @mousemove="mover" @mouseup="parar">
      <g ref="g1">
        <rect ref="r1" x="75" y="225" width="50" height="50"/>
        <circle ref="c1" @mouseenter="abrir" @mouseleave="fechar"
          r="25" fill="#ffffff99" stroke="#444" stroke-width="2" 
          opacity="1" class="c1" cx="100" cy="250"/>
      </g>
    </svg>

    <div @mouseup="parar" class="pv" ref="pv"></div>
    <div @mouseup="parar" class="pr1" ref="pr1"></div>
    <div @mouseup="parar" class="pr2" ref="pr2"></div>
  </div>
</template>

<script>
import anime from 'animejs' 

export default {
  name: 'home',
  data() {
    return {
      dragStart: false ,
      dragStartEv: null ,
      animacao: null ,
      c1Anim: null
    }
  },
  mounted() {
    // objeto para guardar os valores,
    // a estratégia é calcular todos os valores neste objeto (pois temos funções
    // de animação diferentes para cada atributo),
    // e no último passo da animação aplicar os valores nos elementos.
    let obj = {
      k: 0 , 
      c1X: this.$refs.c1.getAttribute('cx') ,
      c1Y: this.$refs.c1.getAttribute('cy') ,
    } 
    let line = anime.timeline({ targets: obj, duration: 1000 })
    line.add({ easing: 'linear',      k:   1,   duration: 500 }, 250)
    line.add({ easing: 'easeInCubic', c1X: 700  }, 0)
    line.add({ easing: 'linear',      c1Y: 400  }, 0)
    line.add({ update: anim => {
      let item = anim.animatables[0].target
      this.$refs.r1.setAttribute('x', item.c1X - 25 )
      this.$refs.r1.setAttribute('y', item.c1Y - 25 )
      this.$refs.r1.setAttribute('transform', `rotate(${90 * item.k} ${item.c1X} ${item.c1Y})` )
      this.$refs.c1.setAttribute('cx', item.c1X )
      this.$refs.c1.setAttribute('cy', item.c1Y )
    } }, 0)
    line.pause()
    this.animacao = line
  },
  methods: {
    abrir() {
      if( this.c1Anim ) this.c1Anim.pause()
      this.c1Anim = anime({ targets: this.$refs.c1, duration: 1000, r: 80 })
    },
    fechar() {
      if( this.c1Anim ) this.c1Anim.pause()
      this.c1Anim = anime({ targets: this.$refs.c1, duration: 1000, r: 25 })
    },
    iniciar(ev) {
      this.dragStart = true
      this.dragStartEv = ev

      this.$refs.pv.style.top  = `${ ev.y - 50 }px`
      this.$refs.pv.style.left = `${ ev.x -  1 }px`

      this.$refs.pr1.style.top  = `${ ev.y - 50 }px`
      this.$refs.pr1.style.left = `${ ev.x -  1 - 100 }px`

      this.$refs.pr2.style.top  = `${ ev.y - 50 }px`
      this.$refs.pr2.style.left = `${ ev.x -  1 + 100 }px`
    },
    parar() {
      this.dragStart = false
      this.dragStartEv = null
    },
    mover(ev) {
      if( !this.dragStart ) return
      let x = ev.x - this.dragStartEv.x
      if( x < 0 ) x = 0
      if( x > 100 ) x =100
      this.animacao.seek( this.animacao.duration * x/100 )
    }
  }
}
</script>
<style lang="scss" scoped>
svg {
  border: 1px solid #ccc;
  overflow: hidden;
}
.pv {
  width: 3px;
  height: 100px;
  background: darkgreen;
  position: absolute;
}
.pr1, .pr2 {
  width: 3px;
  height: 100px;
  background: red;
  position: absolute;
}
</style>

