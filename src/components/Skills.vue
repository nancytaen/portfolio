<template>
    <div class="mt-4">

        <!-- Programming Skills -->
        <div class="mb-4">
            <h4>Programming</h4>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <b-card v-for="(skill, idx) in skills.program" :key="idx"
                    class="col-lg-2 col-sm-3 mr-3 mb-3 pr-0 pl-0"
                    border-variant="warning" :header="skill.name"
                    header-bg-variant="transparent"
                    align="center">
                    <b-card-img :src="skill.img" class="prog-logo" />
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
                    <b-card-img :src="skill.img" class="prog-logo" />
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
                    class="col-lg-4 col-sm-8 mr-3 mb-3 pr-0 pl-0"
                    border-variant="success" :header="skill.name"
                    header-bg-variant="transparent"
                    align="center">
                    <b-card-img :src="skill.img" class="hd-logo" />
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
          {name: 'Python', exps: ['6 years learning', '4 months intern'], img:'img/logos/python.png'},
          {name: 'C++', exps: ['1 year learning'], img:'img/logos/cplusplus.png'},
          {name: 'C', exps: ['2 years learning'], img:'img/logos/c.png'},
          {name: 'VueJS', exps: ['1 year learning', '4 months intern'], img:'img/logos/vue.png'},
          {name: 'HTML', exps: ['1 year learning', '4 months intern'], img:'img/logos/html.png'},
          {name: 'Bootstrap', exps: ['1 year learning', '4 months intern'], img:'img/logos/bootstrap.png'}
      ], hardware: [
          {name: 'Verilog HDL / ARM', exps: ['1 year learning'], img:'img/logos/fpga.png'},
      ], system: [
          {name: 'MYSQL', exps: ['4 months intern'], img:'/img/logos/mysql.png'},
          {name: 'AWS', exps: ['3 months learning'], img:'/img/logos/aws.jpg'}
      ]}
    }
  }
}
</script>

<style scoped>
    .prog-logo {
        width: 100px;
        height: 100px;
    }

    .hd-logo {
        width: 250px;
        height: 100px;
    }
</style>