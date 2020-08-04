<template>
  <div>

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
