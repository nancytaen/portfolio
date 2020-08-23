<template>
  <div class="container">
    <b-card-group deck>
      <b-card style="min-width:300px; margin-bottom: 10px;" v-for="(project, idx) in projects" :key="idx" 
      :title="project.name"
      :img-src="project.img" alt="" img-top>
          <b-card-text>{{project.description}}</b-card-text>
          <b-card-text><small>{{project.date}}</small></b-card-text>


          AA
          <div class="row">
          <span v-for="icon in project.icons" :key="icon">
            <font-awesome-icon :icon="icon" />
          </span>
          </div>
          BB


          <div>
            <b-button id="show-btn" @click="$bvModal.show('pModal' + idx)">More</b-button>
            <b-modal :id="'pModal' + idx" :title="project.name" hide-footer centered>
              <b-img :src="project.img" alt="" fluid />
              <p class="h4"> {{project.name}} <p>
              <ul>
                <li v-for="point in project.details" :key="point">{{point}}</li>
              </ul>
              <p v-if="project.algorithms"> <strong>Algorithms:</strong> {{project.algorithms}} </p>
              <p> <strong>Languages:</strong> {{project.languages}} </p>
              <p v-if="project.code"> <strong>Code:</strong> {{project.code}} </p>
              <p v-if="project.tip"> STAR: {{project.tip}} </p>
              <b-button class="mt-3" block @click="$bvModal.hide('pModal' + idx)">Close</b-button>
            </b-modal>
          </div>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { faPython, faHtml5, faBootstrap, faCuttlefish} from '@fortawesome/free-brands-svg-icons'
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
        icons: [faPython],
        date: 'March 2019',
        details: ['An AI chess player', 'People can play chess against it through the terminal'],
        algorithms: 'Binary tree and min-max algorithm',
        tip: '', 
        languages: 'Python', code: ''},

        { name: 'City Map', img: '/img1', 
        description: 'A city map using Open Streets API',
        icons: [faCuttlefish],
        date: 'Jan 2020 - April 2020',
        details: ['A school project in a group of 3', 'Used Open Streets API and EZGL/ to display graphics of different cities',
        'Showed restaurants and implemented search feature using Yelp API', "Found shortest route between two points on the map and displayed directions",
        "Found an optimized solution to Travelling Sales Man Problem, and ranked 19th in a class of 100 teams"], 
        algorithms: "Dijkstra's/A* algorith, STL vector, map, unordered_map, priority queue",
        languages: 'C++', code: 'Due to academic reasons, the code cannot be publicized. It can be shown upon request.'},
        
        { name: '3x3 sliding puzzle', img: '/img1', 
        description: 'A sliding puzzle game that can be played on DE1-SOC computer',
        icons: [],
        date: 'April 2020',
        details: ['A sliding puzzle game', 'VGA to display graphics', 'PS2-keyboard to slide tiles', 
        'Timer and HEX display to show the current status', 'A final project for hardware class, in a group of 2'], 
        languages: 'C (using C to ARM compiler)', code: ''},
        
        { name: 'Petimage', img: '/img1', 
        date: 'April-June 2020',
        icons: [faPython, faHtml5, faBootstrap],
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        details: [], 
        languages: '', code: ''},
        
        { name: 'Citation Machine', img: '/img1',
        date: 'July 2020', 
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        icons: [faPython],
        details: [], 
        languages: '', code: ''},
        
        // { name: 'Project6', img: '/img1', 
        // description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        // details: [], 
        // languages: '', code: ''}
      ]
    }
  }
}
</script>