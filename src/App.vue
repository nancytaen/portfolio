<template>
  <div id="app">

    <!-- navigation header -->
    <!-- TODO: add scroll animation -->
    <div>
      <b-navbar toggleable="sm" type="light" variant="light" fixed="top">
        <b-navbar-brand href="/">Home</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav v-for="navLink in navLinks" :key="navLink.name">
            <b-nav-item :href="navLink.url">{{navLink.name}}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <!-- Content -->
    <router-view></router-view>

    <!-- footer -->
    <div>
      <footer class="bg-light">
        <div>
          <div class="footer-title"> CONTACT </div>
          <font-awesome-icon icon="phone" /> 
          (+1) 437-970-4730 <br>
          <a class="btn btn-light btn-social"  href="mailto:nancyduot.li@mail.utoronto.ca">
            <font-awesome-icon icon="envelope" />  
          </a> 
          nancyduot.li@mail.utoronto.ca <br>
          <font-awesome-icon icon="map-marker" /> 7 Grenville St. Toronto, ON, Canada
        </div>
        <div>
          <div class="footer-title"> LINKS </div>
          <a class="btn btn-light btn-social" href="https://github.com/nancytaen" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
          <a class="btn btn-light btn-social" href="https://ca.linkedin.com/in/nancy-li-557106181" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" />
          </a>
          <a class="btn btn-light btn-social" href="https://www.facebook.com/NancyTaenLi" target="_blank">
            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>
        </div>
      </footer>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return {
      navLinks: [
        {name: 'About', url: '/#about'},
        {name: 'Projects', url: '/#projects'},
        {name: 'Contact', url: '/#contact'}
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
