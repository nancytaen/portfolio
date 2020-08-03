<template>
  <div id="app">
    <!-- navigation header -->
    <!-- TODO: add scroll animation -->
    <div>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-brand href="/">Home</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-for="navLink in navLinks" :key="navLink.name">
            <b-nav-item :href="navLink.url">{{navLink.name}}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>


    <router-link to="/layout">Layout</router-link>
    ABC
    <router-view></router-view>
    FOOTER
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      navLinks: [
        {name: 'About', url: '/layout/#about'},
        {name: 'Projects', url: '/layout/#projects'},
        {name: 'Contact', url: '/layout/#contact'}
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
