<template>
  <div>
    <br>
    <section id ="about" class="mt-5">
      <About />
    </section>

    <section id ="projects" class="mt-5">
      <Projects />
    </section>

    <section id ="contact" class="mt-5">
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
