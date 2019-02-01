<template>
  <div id="app">
    <nav>
      <router-link v-for="x in rotas" :key="x.name" :to="x.path">
        {{ x.meta.label }}
      </router-link>
    </nav>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
import routes from './router'

export default {
  data() {
    return {
      rotas: routes.options.routes
    }
  }
} 
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: row;

  & > * {
    height: 100%;

    flex-shrink: 0;
    flex-grow: 1;
  }
}
nav {
  background: #023f02;
  padding: 40px 0 0;
  width: 250px;
  max-width: 250px;

  a {
    text-decoration: none;
    display: block;
    color: #2c3e50;
    padding: 22px 30px 16px 40px;
    text-align: left;
    color: #249646;
    border-top: 1px dashed rgba(255,255,255, 0.1);
    position: relative;

    transition: background 0.3s linear;

    &:after {
      content: '';
      position: absolute;
      height: 16px;
      width: 16px;
      background: rgba(255,255,255, 0.4);
      border-radius: 50%;
      left: 10px;
      transform: scale(0);
      transition: transform 0.3s ease-out;
    }

    &:last-of-type {
      border-bottom: 1px dashed rgba(255,255,255, 0.1);
    }
    &:hover {
      background: rgba(255,255,255, 0.2);
    }
    &.router-link-exact-active {
      color: #fff;

      &:after {
        transform: scale(1);
      }
    }
  }
}
</style>
