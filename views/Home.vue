<template>
  <v-app>
  <v-app id="inspire">
    <v-app-bar app color="black" dark>
      <v-btn>
      <v-img :src="require('@/assets/sun.png')" height="20px" max-width="50px"></v-img></v-btn>
      <v-btn transparent class="transparent" to="/"><v-toolbar-title class="text-uppercase yellow--text">
                <span class="font-weight-light">Sun</span>
                <span>Shine</span>
            </v-toolbar-title></v-btn>
            <v-spacer></v-spacer>
            <div class="flex-grow-1"></div>
      <v-toolbar-items >
        <v-btn color="yellow" to="/whatwedo" text>What we do?</v-btn>
        <v-btn color="yellow" to="/ourimpact" text>Our Impact</v-btn>
        <v-btn color="yellow" to="/jointhemovement" text>Join the Movement</v-btn>
        <v-btn color="yellow" to="/donate" text>Donate</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>

      <div id="carousel">
      <v-carousel  hide-delimiters height="550px">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        <v-col >
          <div id="title" class="display-3 white--text font-weight-bold text-center">{{ item.title }} </div>
          <div id="joinnow">
            <v-btn to="/register" color="primary text-center">Join Now</v-btn>
          </div>
          </v-col>
        </v-row>

        </v-carousel-item>
  </v-carousel>
  </div>

        <!-- <v-row id="image" align="center" justify="center">
    <v-img
      src="@/assets/mainback.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="1350"
      max-height="550">
    <v-row align="end" class="lightbox white--text pa-2 fill-height">
       <v-col><h1 id="heading" class="display-3 font-weight-bold text-center">Sunshine Foundation</h1>
      <h4 id="subheading" class="subheading text-center">Be a part of our Community!</h4>
      <v-btn to="/register" class="text-center" color="yellow darken-3" dark large>Join NOW!</v-btn>
      </v-col>
    </v-row>
    </v-img>
  </v-row> -->

  <div class="black text-center" ><p class="display-1 font-weight-bold text-center white--text"><br>THE CRISIS<br></p>
    <span class="white--text">
      <br>The education crisis is a complex puzzle with layers of issues from attendance to teaching quality. Underlying all of these complex layers of failing <br>education systems in the country lies a severe lack of leadership.<br>
    <br></span><br>
    <v-btn outlined color="yellow" class="text-center">Learn More</v-btn>
    <br><br>
  </div>
  <br><br><br>
  <div class="text-center"><p class="headline">At Sunshine Foundation, we are building a movement of leaders who will eliminate educational inequity in India.</p></div>
  <br><br>

  <div>
    <v-img src="@/assets/pic.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="1350"
      max-height="400">
      <v-col><h1 id="heading" color="white" class="display-1 font-weight-bold text-center">Volunteering Program</h1><br>
      <p id="fellow" class="white--text text-center">The Sunshine Volunteering program, is an opportunity for India’s brightest and most promising youth, from the nation’s best universities and workplaces,<br>
       to serve as full-time teachers to children from low-income communities in some of the nation’s most under-resourced schools. Through this experience of teaching<br>
       in classrooms and working with key education stakeholders like students, principals, and parents, our Volunteers get exposed to the grassroot realities of India’s<br>
        education system and begin to cultivate the knowledge, skills, and mindsets necessary to attain positions of leadership in education and identify their role in<br>
        building a wider movement for educational equity in the country.</p><br>
        <v-btn class="text-center" outlined color="white">Learn about the Volunteering</v-btn>
      </v-col></v-img>
  </div>

<div class="text-center">
  <p id="jointhemove" class="display-1">Join the Movement</p> <br>
  <span>It takes a movement of citizens to solve the crisis. You could be a part of the solution. Join the movement for educational equity<br> for all children and for a better, brighter India.</span><br><br>
</div>
  <v-row>
  <v-card :elevation="24" class="mx-auto"  id="card" max-width="500">
    <v-img class="white--text" height="200px" src="@/assets/volunteers.png" >
      <!-- <v-card-title class="align-end fill-height black--text">VOLUNTEER Login</v-card-title> -->
    </v-img>
    <v-card-text class="black">
      <span class="text--primary">
        <span class="white--text">Help a needy and spread happiness</span>
      </span>
    </v-card-text>

    <v-card-actions class="black">
      <v-btn to="/loginforvolunteers" class="ma-2" outlined color="yellow">Volunteer Login</v-btn>
    </v-card-actions>
  </v-card>

<v-card :elevation="24" class="mx-auto" id="card" max-width="400">
    <v-img class="white--text" height="200px" src="@/assets/staff.jpg">
      <!-- <v-card-title class="align-end fill-height black--text">STAFF Login</v-card-title> -->
    </v-img>

    <v-card-text class="black">
      <span class="text--primary">
        <span class="white--text text--center">Staff (Sunshine Foundation) </span>
      </span>
    </v-card-text>

    <v-card-actions class="black">
            <v-btn to="/loginforstaff" class="ma-2" outlined color="yellow">Staff Login</v-btn>
    </v-card-actions>
  </v-card>
  </v-row>
  <br><br><br>

    </v-content>
    <v-footer color="black" app>
      <span class="yellow--text">&copy; (Webmasters-2019)</span>
      <v-toolbar-items class="justify-center">
        <v-btn color="yellow" to="faqs" class="white--text" text>FAQs</v-btn>
        <v-btn color="yellow" to="/privacypolicy" class="white--text" text>Privacy Policy</v-btn>
        <v-btn color="yellow" to="/contact" class="white--text" text>Contact us</v-btn>
      </v-toolbar-items>
      <template>
        <div class="flex-grow-1"></div>

        <v-btn color="yellow" icon>
        <a href="https://www.facebook.com" color="yellow"  >
          <v-icon>mdi-facebook</v-icon></a>
        </v-btn>
        <v-btn color="yellow" icon>
            <a href="https://www.instagram.com" >
          <v-icon>mdi-instagram</v-icon></a>
        </v-btn>
        <v-btn color="yellow" icon>
            <a href="https://www.twitter.com" >
          <v-icon>mdi-twitter</v-icon></a>
        </v-btn>
        <v-btn color="yellow" icon>
            <a href="https://www.linkedin.com" >
          <v-icon>mdi-linkedin</v-icon></a>
        </v-btn>
        <v-btn color="yellow" icon>
            <a href="https://www.youtube.com" >
          <v-icon>mdi-youtube</v-icon></a>
        </v-btn>
      </template>
    </v-footer>
<v-footer/>
  </v-app>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://reliefindiatrustngoinindia.files.wordpress.com/2014/12/c0ee8-happy-childrens2bmaking2bresponsible2bat2brelief2bindia2btrust.jpg",
          title: "SUNSHINE FOUNDATION"
        },
        {
          src:
            "https://www.worldvision.in/CMSAdmin/Uploads/28112016033754719Rescue-children-on-the-street.jpg",
          title: "Are you ready to be the change?"
        },
        {
          src:
            "https://rs.projects-abroad.ie/v1/hero/product-5b55d73b084b6.[1600].jpeg",
          title: "Help the needy"
        },
        {
          src:
            "https://i0.wp.com/www.oxleads.com/wp-content/uploads/2018/08/equacation.jpg?fit=770%2C330",
          title: "Be the sunshine to the needy"
        },
        {
          src:
            "https://www.help-education.org/wp-content/uploads/2016/10/Volunteerwithkids-e1491202360632.jpg",
          title: "Are you ready for it?"
        }
      ],
      icons: [
        {
          url: "https://www.twitter.com/",
          target: "_blank"
        }
      ]
    };
  }
};
</script>

<style>
#carousel {
  margin-top: -65px;
  height: 550px;
}

#title {
  align-items: center;
}

#joinnow {
  margin-left: 600px;
}

#image {
  margin-top: -65px;
}

#card {
  width: 400px;
  margin-top: 30px;
}

#fellow {
  margin-left: 10px;
}

#volbtn {
  margin-left: 500px;
}

#jointhemove {
  margin-top: 30px;
}

#iconbtn {
  color: yellow;
}
</style>
