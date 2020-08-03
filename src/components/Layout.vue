<template>
    <div>
        LAYOUT HERE
    <b-icon-arrow-up></b-icon-arrow-up>
    <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
    <router-link to="/layout">Layout</router-link>

    <section id ="about">
      <About />
    </section>

    <section id ="projects">
      <Projects />
    </section>

    <section id ="contact">
      <Contact />  
    </section>
  </div>
</template>

<script>
import About from './About.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'

export default {
  name: 'Layout',
  props: {
    msg: String
  },
  components: { About, Projects, Contact }
}
</script>
