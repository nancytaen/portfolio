<template>
    <div class="about-me container-sm mt-4">
      <div>
          <!-- header & image -->
        <b-img src="img/profile.jpg" rounded="circle" fluid alt="Picture of Nancy"/>
        
        <div class="about-me-body">
          <div class="container-sm">
            <br>

            <p class="lead"> Hello! My name is Nancy Li.</p> 
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

          <div>
            <br>
            <!-- download resume -->
            My resume can be found <a href="file/NancyLi_Resume.pdf" target="_blank"> here</a>. <br>
            Feel free to reach out to me for detailed CV or official/unofficial transcript.
          </div>

          <div class="mt-5">
            <h3>Skills</h3>
            <div class="mt-2 mb-4">
              <h4>Programming</h4>
              <div class="container-fluid">
                <div class="row justify-content-center">
                  <b-card v-for="(skill, idx) in skills.program" :key="idx"
                    class="col-lg-2 col-sm-4 mr-3 mb-3 pr-0 pl-0"
                    border-variant="warning" :header="skill.name"
                    header-bg-variant="transparent"
                    align="center">
                    <template v-slot:footer>
                      <span v-for="exp in skill.exps" :key="exp">
                        <small class="text-muted">{{exp}}</small><br>
                      </span>
                    </template>
                  </b-card>
                </div>
              </div>
            </div>

            <div class="mt-2 mb-4">
              <h4>Hardware</h4>
              <div class="container">
                <div class="row justify-content-center">
                  <b-card v-for="(skill, idx) in skills.hardware" :key="idx"
                    class="col-lg-2 col-sm-4 mr-3 mb-3 pr-0 pl-0"
                    border-variant="success" :header="skill.name"
                    header-bg-variant="transparent"
                    align="center">
                    <template v-slot:footer>
                      <span v-for="exp in skill.exps" :key="exp">
                        <small class="text-muted">{{exp}}</small><br>
                      </span>
                    </template>
                  </b-card>
                </div>
              </div>
            </div>

            <div class="mt-2 mb-4">
              <h4>System</h4>
              <div class="container">
                <div class="row justify-content-center">
                  <b-card v-for="(skill, idx) in skills.system" :key="idx"
                    class="col-lg-2 col-sm-4 mr-3 mb-3 pr-0 pl-0"
                    border-variant="info" :header="skill.name"
                    header-bg-variant="transparent"
                    align="center">
                    <template v-slot:footer>
                      <span v-for="exp in skill.exps" :key="exp">
                        <small class="text-muted">{{exp}}</small><br>
                      </span>
                    </template>
                  </b-card>
                </div>
              </div>
            </div>

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
  data: function() {
    return {
      skills: {
        program: [
          {name: 'Python', exps: ['6 years learning', '4 months intern']},
          {name: 'C++', exps: ['1 year learning']},
          {name: 'C', exps: ['2 years learning']},
          {name: 'VueJS', exps: ['1 year learning', '4 months intern']},
          {name: 'HTML', exps: ['1 year learning', '4 months intern']},
          {name: 'Bootstrap', exps: ['1 year learning', '4 months intern']}
      ], hardware: [
          {name: 'ARM', exps: ['1 year learning']},
          {name: 'Verilog', exps: ['1 year learning']},
      ], system: [
          {name: 'MYSQL', exps: ['4 months intern']},
          {name: 'AWS', exps: ['3 months learning']}
      ]}
    }
  }
}
</script>