<template>
    <div>
        <div class="mt-4 mb-5">
            <h3>Work Experience</h3>
            <b-card v-for="job in jobs" :key="job.title" :title="job.title" class="col-sm-9 mx-auto text-left mb-2">
                {{job.company}} | {{job.date}} | {{job.location}}
                <br>
                <ul>
                    <li v-for="detail in job.details" :key="detail">{{detail}}</li>
                </ul>
            </b-card>
        </div>

        <div>
            <h3>Entrepreneurial Experience</h3>
            <b-card v-for="entrep in entreps" :key="entrep.name" :title="entrep.name" class="col-sm-9 mx-auto text-left mb-2">
                {{entrep.project}} | {{entrep.date}}
                <br>
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
                {name: 'MoneyPong', project: 'University of Toronto Hatchery', date: 'September 2019 - June 2020',
                 details: []},
                {name: 'Givt', project: 'University of Toronto Hatchery', date: 'June 2020 - present', 
                 details: []}
                ],
        }
    }
}
</script>