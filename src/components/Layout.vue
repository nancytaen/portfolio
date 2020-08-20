<template>
  <div>
    <section>
      <div style="padding-top: 350px; padding-bottom: 50px;">
        <blockquote class="blockquote container-sm text-left">
          <p><em>A backend/full stack engineer interested in web development and machine learning</em></p>
        </blockquote>
      </div>
    </section>

    <section id ="about">
      <h1 class="pt-5">About Me</h1>
      <About />
    </section>

    <section id="experience">
      <h1 class="pt-5">Experience</h1>
      <Experience />
    </section>

    <section id ="projects">
      <h1 class="pt-5">Projects</h1>
      <Projects />
    </section>

    <section id ="contact">
      <h1 class="pt-5">Contact</h1>
      <Contact />  
    </section>
  </div>
</template>

<script>
import About from './About.vue'
import Experience from './Experience.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'

export default {
  name: 'Layout',
  props: {
    msg: String
  },
  components: { About, Experience, Projects, Contact }
}
</script>
