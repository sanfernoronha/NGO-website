import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import OurStory from "./views/OurStory.vue";
import OurImpact from "./views/OurImpact.vue";
import WhatWeDo from "./views/WhatWeDo.vue";
import JoinTheMovement from "./views/JoinTheMovement.vue";
import Donate from "./views/Donate.vue";
import Contact from "./views/Contact.vue";
import PrivacyPolicy from "./views/PrivacyPolicy.vue";
import faqs from "./views/faqs.vue";
import LoginforStaff from "./components/LoginforStaff.vue";
import LoginforVolunteer from "./components/LoginforVolunteers.vue";
import Register from "./components/Register.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/ourstory",
            name: "ourstory",
            component: OurStory
        },
        {
            path: "/whatwedo",
            name: "whatwedo",
            component: WhatWeDo
        },
        {
            path: "/ourimpact",
            name: "ourimpact",
            component: OurImpact
        },
        {
            path: "/joinThemovement",
            name: "jointhemovement",
            component: JoinTheMovement
        },
        {
            path: "/donate",
            name: "donate",
            component: Donate
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/loginforstaff",
            name: "loginforstaff",
            component: LoginforStaff
        },
        {
            path: "/loginforvolunteers",
            name: "loginforvolunteers",
            component: LoginforVolunteer
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/privacypolicy",
            name: "privacypolicy",
            component: PrivacyPolicy
        },
        {
            path: "/faqs",
            name: "faqs",
            component: faqs
        }
    ]
});