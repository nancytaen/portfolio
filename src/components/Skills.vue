<template>
    <div class="mt-4">

        <!-- Programming Skills -->
        <div class="mb-4">
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

        <!-- Hardware Skills -->
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

        <!-- System Skills -->
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
</template>

<script>
export default {
    name: 'Skills',
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