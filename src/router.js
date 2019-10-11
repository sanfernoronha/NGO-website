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
import Dashboard from "./views/Dashboard.vue";
import DashboardStaff from "./views/Dashboard_Staff.vue";
import Edit from "./views/edit_event.vue";
import firebase from "firebase";
import Profile from "./components/profile.vue";
import View_more from "./components/view_more.vue";

Vue.use(Router);

let router = new Router({
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
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/viewmore/:volEmail/:EventID",
      name: "viewMore",
      component: View_more
    },
    {
      path: "/loginforstaff/",
      name: "loginforstaff",
      component: LoginforStaff
    },
    {
      path: "/loginforvolunteers/",
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
    },
    {
      path: "/dashboard/:userEmail",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/dashboardStaff/:staffEmail",
      name: "dashboardStaff",
      component: DashboardStaff,
      meta: {
        requiresStaffAuth: true
      }
    },
    {
      path: "/edit/:eventID",
      name: "Edit",
      component: Edit,
      meta: {
        requiresStaffAuth: true
      }
    }
  ]
});

//nav guards
router.beforeEach((to, from, next) => {
  //check for required Staffauth guard
  if (to.matched.some(record => record.meta.requiresStaffAuth)) {
    //check if not logged in
    if (!firebase.auth().currentUser) {
      //go to login
      next({
        path: "/loginforstaff/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    //check if logged in
    if (!firebase.auth().currentUser) {
      //go to dashboard
      next({
        path: "/dashboard/:userEmail",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;