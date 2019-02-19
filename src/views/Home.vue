<template>
  <div class="page">
    
    <svg viewBox="0 0 50 50">
      <path ref="p1" class="pp" d="M 33,32 43,7 V 43 H 7 Z"></path>
      <path ref="t1" class="hn" d="M 7,7   43,7 V 43 H 7 Z"></path>
    </svg>
    <svg viewBox="0 0 50 50">
      <path ref="p2" class="pp" d="M 7,7   C 12,12 38,12 43,7   C 48,12 48,38 43,43   C 38,38 12,38 7,43   C 2,38 2,12 7,7   Z"></path>
      <path ref="t2" class="hn" d="M 7,7   C 7,7 43,7 43,7      C 43,7 43,43 43,43    C 43,43 7,43 7,43    C 7,43 7,7 7,7    Z"></path>
    </svg>
    <svg viewBox="0 0 50 50">
      <path ref="p3" class="pp" d="M 7,25  C 7,7 43,7 43,25   V 43   H 7   V 25   Z"></path>
      <path ref="t3" class="hn" d="M 7,7   C 7,7 43,7 43,7    V 43   H 7   V 7    Z"></path>
    </svg>
    <svg viewBox="0 0 50 50" class="click" @click="clickP4()">
      <text class="click" x="19" y="26.5">Click</text>
      <path ref="p4"  class="pp" d="M 10,20  C 10,20 40,20 40,20  C 40,20 40,30 40,30  C 40,30 10,30 10,30  C 10,30 10,20 10,20  Z"></path>
      <path ref="t41" class="hn" d="M 10,20  C 10,20 40,20 40,20  C 40,20 40,30 40,30  C 40,30 10,30 10,30  C 10,30 10,20 10,20  Z"></path>
      <path ref="t42" class="hn" d="M 10,20  C 10,15 40,15 40,20  C 40,20 40,30 40,30  C 40,35 10,35 10,30  C 10,30 10,20 10,20  Z"></path>
    </svg>
    
  </div>
</template>

<script>
import anime from 'animejs' 

export default {
  name: 'Home',
  data() {
    return { 
      commonClick: { loop: true, direction: 'alternate', duration: 600, loop: 2 }
    }
  },
  mounted() {
    let common = { loop: true, direction: 'alternate', duration: 1600 }
    anime({ ...common , targets: this.$refs.p1, easing: 'easeInOutCubic',
      d: [ { value: this.$refs.t1.getAttribute('d') } ]
    })
    anime({ ...common , targets: this.$refs.p2, // elastic
      d: [ { value: this.$refs.t2.getAttribute('d') } ]
    })
    anime({ ...common , targets: this.$refs.p3, easing: 'easeInOutCubic',
      d: [ { value: this.$refs.t3.getAttribute('d') } ]
    })
  },
  methods: {
    clickP4() {
      this.$refs.p4.setAttribute('d', this.$refs.t41.getAttribute('d') )
      anime({ ...this.commonClick , targets: this.$refs.p4, easing: 'easeOutQuint',
        d: [ 
          { value: this.$refs.t42.getAttribute('d') } ,
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  padding: 15px 20px;
}
svg {
  height: 200px;
  width: 200px;
  border: 1px solid #dfdfdf;
  border-radius: 4px;
  margin: 5px 10px;
  display: inline-block;

  &.click {
    cursor: pointer;

    &:hover {
      background: #efefef;
    }
  }
  text.click {
    fill: #777;
    font-size: 5px;
  }
}
path.hn {
  display: none;
}
.pp {
  fill: none;
  stroke: #000000;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-opacity: 1;
}
</style>

