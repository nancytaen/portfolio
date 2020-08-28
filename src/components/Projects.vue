<template>
  <div class="container container-fluid content-row mt-4">
    <div class="row justify-content-center">
    
      <b-card class="mb-3 mr-3 col-sm-9 col-8 col-lg-3 pr-0 pl-0" v-for="(project, idx) in projects" :key="idx" 
      :title="project.name" :img-src="project.img" alt="" img-top>
          <b-card-text>{{project.description}}</b-card-text>
          <b-card-text><small>{{project.date}}</small></b-card-text>
          <template v-slot:footer>
            <div class="row float-right">
              <span class="mr-1" v-for="icon in project.icons" :key="icon">
                <font-awesome-icon :icon="icon" size="2x" />
              </span>
            </div>
          </template>

          <div>
            <b-button id="show-btn" @click="$bvModal.show('pModal' + idx)">More</b-button>
            <b-modal :id="'pModal' + idx" :title="project.name" hide-footer centered>
              <b-tabs content-class="mt-3">

                <!-- First Tab: Description -->
                <b-tab title="About" active>
                  <b-img :src="project.img" alt="" fluid />
                  <p><strong>Description</strong></p>
                  <ul>
                    <li v-for="point in project.details" :key="point">{{point}}</li>
                  </ul>
                  <p v-if="project.algorithms"> <strong>Algorithms:</strong> {{project.algorithms}} </p>
                  <p> <strong>Languages:</strong> {{project.languages}} </p>
                  <p v-if="project.tip"> <font-awesome-icon icon="star" /> {{project.tip}} </p>
                </b-tab>

                <!-- Second Tab: Video/Source Code/Link -->
                <b-tab title="Demo">
                  This is Demo!
                  <div>
                    <a v-if="project.code" :href="project.code"><b>Source Code Link</b></a>
                    <p v-else>*** {{ project.codeMes }}</p>
                  </div>
                </b-tab>

              </b-tabs>

              <b-button class="mt-3" block @click="$bvModal.hide('pModal' + idx)">Close</b-button>
            </b-modal>
          </div>
          
      </b-card>
      
    </div>
  </div>
</template>

<script>
import { faPython, faHtml5, faBootstrap, faCuttlefish, faAws, faJs, faYelp} from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'Projects',
  props: {
    msg: String
  },
  data: function() {
    return {
      projects: [
        { name: 'Chess', img: '/img/projects/chess.jpg', 
        description: "Chess game and AI Chess player",
        icons: [faPython],
        date: 'March 2019',
        details: ['An AI chess player', 'People can play chess against it through the terminal'],
        algorithms: 'Binary tree and min-max algorithm',
        tip: '', 
        languages: 'Python', code: 'https://github.com/nancytaen/Chess'},

        { name: 'City Map', img: '/img/projects/citymap.png', 
        description: 'A city map using Open Streets API',
        icons: [faCuttlefish, faYelp],
        date: 'Jan 2020 - April 2020',
        details: ['A school project in a group of 3', 'Used Open Streets API and EZGL/ to display graphics of different cities',
        'Showed restaurants and implemented search feature using Yelp API', "Found shortest route between two points on the map and displayed directions",
        "Found an optimized solution to Travelling Sales Man Problem, and ranked 19th in a class of 100 teams"], 
        algorithms: "Dijkstra's/A* algorith, STL vector, map, unordered_map, priority queue",
        languages: 'C++: STL, libCurl: Yelp API, GTK', code: '', codeMes: 'Due to academic reasons, the code cannot be publicized. Please reach out to me for the source code.'},
        
        { name: '15 Puzzle Game (Hardware)', img: '/img/projects/slidepuzzle.png', 
        description: 'A sliding puzzle game that can be played on DE1-SOC computer',
        icons: [faCuttlefish],
        date: 'April 2020',
        details: ['A sliding puzzle game', 'VGA to display graphics', 'PS2-keyboard to slide tiles', 
        'Timer and HEX display to show the current status', 'A final project for hardware class, in a group of 2'], 
        languages: 'C (using C to ARM compiler)', code: ''},
        
        { name: 'Petimage', img: '', 
        date: 'April 2020 -',
        icons: [faPython, faHtml5, faBootstrap, faJs, faAws],
        description: 'An instagram-like site where users share pictures of their pets',
        details: ['Users create accounts, then upload and post pictures', 'Users can follow other users', 
        'Users can like and comment other posts'], 
        tip: 'Designed the Relational Database models', 
        languages: 'Python: Flask, Sqlalchemy (MYSQL), alembic Jinja, HTML, Bootstrap, AWS: EC2, S3',
        code: 'https://github.com/nancytaen/petimage'},
        
        { name: 'Citation Machine', img: '/img/projects/citation.png',
        date: 'July 2020', 
        description: 'A citation machine that generates IEEE citations given URLs',
        icons: [faPython, faHtml5],
        details: ['Takes a list of URLs in editor or .txt file and generates IEEE Reference page', 'Uses Newspaper3k to retrieve article data', 
        'Output IEEE reference in editor or .txt file'
        ], 
        tip: 'Used multithreading (ThreadPoolExecutor) to increase the speed',
        languages: 'Python: Flask, Jinja, Newspaper3k', code: 'https://github.com/nancytaen/citation'},
        
        // { name: 'Project6', img: '/img1', 
        // description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        // details: [], 
        // languages: '', code: ''}
      ]
    }
  }
}
</script>