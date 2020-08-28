<template>
  <div id="app">

    <!-- navigation header -->
    <div>
      <b-navbar toggleable="sm" type="light" variant="light" fixed="top">
        <b-navbar-brand href="#top">Top</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-for="navLink in navLinks" :key="navLink.name">
            <b-nav-item :href="navLink.url">{{navLink.name}}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- Content -->
    <Layout></Layout>



    <!-- footer -->
    <footer class="bg-light">
      <div class="container-footer">
      <span class="container align-middle">
        Created by Nancy Li <br>
        © Nancy Li's Portfolio Site 2020. All rights reserved.
      </span>
      </div>
    </footer>


  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components: { Layout },
  data: function() {
    return {
      navLinks: [
        {name: 'About', url: '#about'},
        {name: 'Skills', url:'#skills'},
        {name: 'Experience', url: '#experience'},
        {name: 'Projects', url: '#projects'},
        {name: 'Contact', url: '#contact'}
      ]
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container-footer {
  height: 150px; 
  margin-top: 100px;
  display: flex;
  align-items: center;
}
</style>
