<template>
    <div class="h2 mb-0 layout">
        LAYOUT HERE
    <b-icon-arrow-up></b-icon-arrow-up>
    <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
    <router-link to="/layout">Layout</router-link>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
