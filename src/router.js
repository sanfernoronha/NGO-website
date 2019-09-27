import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import OurStory from './views/OurStory.vue'
import OurImpact from './views/OurImpact.vue'
import WhatWeDo from './views/WhatWeDo.vue'
import JoinTheMovement from './views/JoinTheMovement.vue'
import Donate from './views/Donate.vue'
import Contact from './views/Contact.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'
import faqs from './views/faqs.vue'
import LoginforStaff from './components/LoginforStaff.vue'
import LoginforVolunteer from './components/LoginforVolunteers.vue'
import Register from './components/Register.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/OurStory',
            name: 'ourstory',
            component: OurStory
        },
        {
            path: '/WhatWeDo',
            name: 'whatwedo',
            component: WhatWeDo
        },
        {
            path: '/OurImpact',
            name: 'ourimpact',
            component: OurImpact
        },
        {
            path: '/JoinTheMovement',
            name: 'jointhemovement',
            component: JoinTheMovement
        },
        {
            path: '/Donate',
            name: 'donate',
            component: Donate
        },
        {
            path: '/Contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/LoginforStaff',
            name: 'loginforstaff',
            component: LoginforStaff
        },
        {
            path: '/LoginforVolunteers',
            name: 'loginforvolunteers',
            component: LoginforVolunteer
        },
        {
            path: '/Register',
            name: 'register',
            component: Register
        },
        {
            path: '/PrivacyPolicy',
            name: 'privacypolicy',
            component: PrivacyPolicy
        },
        {
            path: '/faqs',
            name: 'faqs',
            component: faqs
        },
    ]
})