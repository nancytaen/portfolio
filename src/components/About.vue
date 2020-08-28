<template>
    <div class="about-me container-sm mt-4">
      <div>
          <!-- header & image -->
        <b-img src="img/profile.jpg" rounded="circle" fluid alt="Picture of Nancy"/>
        
        <div class="about-me-body">
          <div class="container-sm">
            <br>

            <p class="lead-text"> Hello! My name is Nancy Li.</p> 
            I am a <strong> 3rd year Computer Engineering </strong> student studying at University of Toronto. 
            My passion lies in <u> computer software, hardware, and mathematics</u>. I am especially interested in software development, 
            including <u> web development and machine learning</u>. I enjoy exploring new algorithms and technologies, and am constantly looking for 
            methods to improve the <strong> efficiency </strong> of the program. I also value <strong> organization </strong> and <strong> readability </strong> when coding. I put strong emphasis on 
            neat project structure, logical classes and database models, and detailed documentation. <br>

            <br>

            In school, I am taking additional classes on <u> mathematics, computer hardware, and business</u>. I am looking  
            to applying these knowledge in software development, such as in machine learning and financial engineering. I want to use my skills and knowledge 
            to build software that can fill <em>the gap</em> in people's lives. 
          </div>
          <br><br>
          <div>
           <!-- download resume -->
            <a class="btn btn-outline-secondary" href="file/NancyLi_Resume.pdf" target="_blank">Resume</a><br>
            Feel free to reach out to me for official/unofficial transcript!
          </div>
        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  },
}
</script>

<style scoped>
  .lead-text {
    font-size: 1.3rem;
    font-weight: 500;
  }
  .about-me-body {
    font-size: 1.1rem;
  }
</style>