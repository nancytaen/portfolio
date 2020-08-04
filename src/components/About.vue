<template>
    <div class="about-me">
      <div>
        <!-- header & image -->
      <h1>
        Nancy Li
      </h1>
      <b-img src="img/profile.jpg" rounded="circle" fluid alt="Picture of Nancy"/>
      <div class="about-me-body">
        <!-- first body paragraph -->
        <div>
          Hello! My name is Nancy Li. I am a 3rd year student studying Computer Engineering at University of Toronto. 

        </div>
        <!-- second body paragraph -->
        <div></div>
        <!-- download resume -->
        <a href="file/NancyLi_Resume.pdf" target="_blank">Resume </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>