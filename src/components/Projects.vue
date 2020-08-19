<template>
  <div class="container">
    <b-card-group deck>
      <b-card style="min-width:300px; margin-bottom: 10px;" v-for="(project, idx) in projects" :key="idx" 
      :title="project.name"
      :img-src="project.img" alt="" img-top>
          <b-card-text>{{project.description}}</b-card-text>
          <div>
            <b-button id="show-btn" @click="$bvModal.show('pModal' + idx)">More</b-button>
            <b-modal :id="'pModal' + idx" :title="project.name" hide-footer centered>
              <b-img :src="project.img" alt="" fluid />
              <p class="h4"> {{project.name}} <p>
              <ul>
                <li v-for="point in project.details" :key="point">{{point}}</li>
              </ul>
              <p> <strong>Algorithms:</strong> {{project.algorithms}} </p>
              <p> <strong>Languages:</strong> {{project.languages}} </p>
              <p v-if="project.tip"> STAR: {{project.tip}} </p>
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
        { name: 'Chess', img: '/img1', 
        description: "Chess game and AI Chess player",
        details: ['An AI chess player', 'People can play chess against it through the terminal'],
        algorithms: 'Binary tree and min-max algorithm',
        tip: '', 
        languages: 'Python', code: ''},
        { name: 'Project2', img: '/img1', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        details: [], 
        languages: '', code: ''},
        { name: 'Project3', img: '/img1', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        details: [], 
        languages: '', code: ''},
        { name: 'Project4', img: '/img1', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        details: [], 
        languages: '', code: ''},
        { name: 'Project5', img: '/img1', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        details: [], 
        languages: '', code: ''},
        { name: 'Project6', img: '/img1', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        details: [], 
        languages: '', code: ''}
      ]
    }
  }
}
</script>