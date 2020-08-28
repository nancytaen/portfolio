<template>
    <div>
        <div class="mt-4 mb-5">
            <h3>Work Experience</h3>
            <b-card v-for="job in jobs" :key="job.title" :title="job.title" 
              class="col-sm-9 col-lg-8 col-11 mx-auto text-left mb-2">
                <ul class="list-inline">
                    <li class="list-inline-item"> <a :href="job.compUrl" target="_blank" class="text-secondary"> {{job.company}} </a> |</li> 
                    <li class="list-inline-item"> {{job.date}} |</li>
                    <li class="list-inline-item"> {{job.location}} </li>
                </ul>
                <ul>
                    <li v-for="detail in job.details" :key="detail">{{detail}}</li>
                </ul>
                
            </b-card>
        </div>

        <div>
            <h3>Entrepreneurial Experience</h3>
            <b-card v-for="entrep in entreps" :key="entrep.name" 
              class="col-sm-9 col-lg-8 col-11 mx-auto text-left mb-2">
                <b-card-title>
                    <a :href="entrep.url" target="_blank" class="text-dark mr-3">{{entrep.name}}</a>
                    <small class="text-muted">{{entrep.position}}</small>
                </b-card-title>
                <ul class="list-inline">
                    <li class="list-inline-item"> <a :href="entrep.projUrl" target="_blank" class="text-secondary">{{entrep.project}}</a> |</li>
                    <li class="list-inline-item"> {{entrep.date}} |</li>
                    <li class="list-inline-item"> {{entrep.location}}</li>
                </ul>
                <ul>
                    <li v-for="detail in entrep.details" :key="detail">{{detail}}</li>
                </ul>
                <p v-if="entrep.urlMes">
                    <span class="text-muted">{{entrep.urlMes}}</span>
                </p>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Experience',
    data: function() {
        return {
            jobs: [
                {title: 'Full Stack Developer Intern', company: 'Uniaim Co., Ltd.', location: 'Tokyo, Japan',
                 date: 'May - August 2019', 
                 details: ['Developed a point management system for Japanese Basketball League', 
                 'Retrieved and displayed data of 400,000+ Fan Club members from external APIs',
                 'Created and uploaded excel/csv files from member data',
                 'Python (Flask), VueJS, MYSQL, AWS (EC2, S3, Lambda)'],
                 compUrl: 'https://uniaim.co.jp/',},
                ],
            entreps: [
                {name: 'MoneyPong', position: 'Co-Founder/ Developer', project: 'U of T Hatchery', date: 'Sept 2019 - June 2020',
                 location: 'Toronto, ON, Canada',
                 details: ['A team of 5 University of Toronto students',
                 'A pong game with integration of crypto currency',
                 'Built member login and signup pages using jQuery and NodeJS',
                 'Participated in UofT Hatchery and conducted research on the market and the legal drawbacks'],
                 projUrl: 'https://hatchery.engineering.utoronto.ca/',
                 url: 'http://moneypong.herokuapp.com/'},
                {name: 'Givt', position: 'Co-Founder', project: 'U of T Hatchery', date: 'June 2020 - present', 
                 location: 'Toronto, ON, Canada',
                 details: ['A pivot of MoneyPong in the Hatchery Program',
                 'A system where users can split the cost of a gift',
                 'Formulated ideas, conducted research, and prepared for pitches to investors'
                 ],
                 projUrl: 'https://hatchery.engineering.utoronto.ca/',
                 urlMes: 'Please contact me if you are interested in seeing the Final Pitch Slide Show.'}
                ],
        }
    }
}
</script>