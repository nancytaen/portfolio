<template>
    <div>
        <div class="mt-4 mb-5">
            <h3>Work Experience</h3>
            <b-card v-for="job in jobs" :key="job.title" :title="job.title" class="col-sm-9 mx-auto text-left mb-2">
                <ul class="list-inline">
                    <li class="list-inline-item"> {{job.company}} |</li> 
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
            <b-card v-for="entrep in entreps" :key="entrep.name" :title="entrep.name" class="col-sm-9 mx-auto text-left mb-2">
                <ul class="list-inline">
                    <li class="list-inline-item"> {{entrep.project}} |</li>
                    <li class="list-inline-item"> {{entrep.date}} |</li>
                    <li class="list-inline-item"> {{entrep.location}}</li>
                </ul>
                <ul>
                    <li v-for="detail in entrep.details" :key="detail">{{detail}}</li>
                </ul>
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
                 date: 'May - August 2019', details: []},
                ],
            entreps: [
                {name: 'MoneyPong', project: 'U of T Hatchery', date: 'Sept 2019 - June 2020',
                 location: 'Toronto, ON, Canada',
                 details: []},
                {name: 'Givt', project: 'U of T Hatchery', date: 'June 2020 - present', 
                 location: 'Toronto, ON, Canada',
                 details: []}
                ],
        }
    }
}
</script>