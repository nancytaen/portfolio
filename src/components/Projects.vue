<template>
  <div class="container">
    <b-card-group deck>
      <b-card style="min-width:300px; margin-bottom: 10px;" v-for="(project, idx) in projects" :key="idx" 
      :title="project.name"
      :img-src="project.img" :alt="'Picture of ' + project.name" img-top>
          <b-card-text>{{project.description}}</b-card-text>
          <div>
            <b-button id="show-btn" @click="$bvModal.show('pModal' + idx)">More</b-button>
            <b-modal :id="'pModal' + idx" :title="project.name" hide-footer centered>
              {{project.name}}
              {{project.description}}
              {{project.languages}}
              <b-button class="mt-3" block @click="$bvModal.hide('pModal' + idx)">Close</b-button>
            </b-modal>
          </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    msg: String
  },
  data: function() {
    return {
      projects: [
        { name: 'Project1', img: '/img1', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        detail: '', 
        languages: '', code: ''},
        { name: 'Project2', img: '/img1', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        detail: '', 
        languages: '', code: ''},
        { name: 'Project3', img: '/img1', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        detail: '', 
        languages: '', code: ''},
        { name: 'Project4', img: '/img1', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        detail: '', 
        languages: '', code: ''},
        { name: 'Project5', img: '/img1', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        detail: '', 
        languages: '', code: ''},
        { name: 'Project6', img: '/img1', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        detail: '', 
        languages: '', code: ''}
      ]
    }
  }
}
</script>