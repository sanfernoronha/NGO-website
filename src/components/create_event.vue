<template>
  <v-container class="fill-height" fluid>
    <v-row>
      <v-col>
        <v-card class="elevation-12" max-width="500px" id="create_card">
          <v-toolbar color="yellow darken-1" dark flat>
            <v-toolbar-title>Create a new volunteering</v-toolbar-title>
            <div class="flex-grow-1"></div>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form_create" @submit.prevent="createEvent">
              <v-text-field
                v-model="title"
                id="title"
                label="Title"
                name="title"
                prepend-icon
                type="text"
                width="50px"
              ></v-text-field>
              <v-text-field
                v-model="title_id"
                id="title_id"
                label="Event ID"
                name="title_id"
                prepend-icon
                type="text"
                width="50px"
              ></v-text-field>

              <v-select
                v-model="location"
                :items="city"
                :rules="[v => !!v || 'required']"
                label="Location"
                required
              ></v-select>

              <v-text-field
                v-model="imageUrl"
                id="image-url"
                label="Image Url"
                name="imageUrl"
                prepend-icon
                type="text"
              ></v-text-field>
              <v-layout row>
                <v-flex xs12 sm6 offset-sm0>
                  <img :src="imageUrl" height="300" />
                </v-flex>
              </v-layout>
              <v-text-field
                v-model="start"
                id="start_date"
                label="Start Date"
                name="start_date"
                prepend-icon
                type="date"
                width="50px"
              ></v-text-field>
              <v-text-field
                v-model="end"
                id="end_date"
                label="End Date"
                name="end_date"
                prepend-icon
                type="date"
                width="50px"
              ></v-text-field>

              <!-- <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="starttime"
                  label="Start Time"
                  persistent-hint
                  prepend-icon="event"
                  @blur="time = parseTime(starttime)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker v-model="date" no-title @input="menu1 = false"></v-time-picker>-->

              <v-textarea
                v-model="description"
                id="description"
                label="Description"
                name="description"
                prepend-icon
                type="text"
                hint="Describe in so and so words"
              ></v-textarea>
              <v-combobox
                v-model="chips"
                :items="items"
                chips
                clearable
                label="Keywords"
                multiple
                solo
              >
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="remove(item)"
                  >
                    <p>{{ item }}</p>&nbsp;
                  </v-chip>
                </template>
              </v-combobox>

              <v-btn class="primary mb-5 mt-5" :disabled="!formIsValid" type="submit">CREATE</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import db from "../components/firebaseInit";

export default {
  name: "CreateEvent",
  data() {
    return {
      title: "",
      title_id: "",
      start: "",
      end: "",
      location: "",
      city: [
        "Ahmedabad",
        "Bangalore",
        "Chennai",
        "Delhi",
        "Firozabad",
        "Gwailor",
        "Hyderabad",
        "Jaipur",
        "Kolkata",
        "Lucknow",
        "Mumbai",
        "Noida",
        "Pune",
        "Raipur",
        "Srinagar"
      ],
      imageUrl: "",
      description: "",
      chips: [],
      items: ["Clean-up", "Donation"],
      staff_email: this.$route.params.staffEmail,
      Volunteer_Email: [],
      completed: false
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    }
  },
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },

    //database
    createEvent() {
      db.collection("events")
        .add({
          Description: this.description,
          End_Date: this.end,
          Event_ID: this.title_id,
          Image_Url: this.imageUrl,
          Keywords: this.chips,
          Location: this.location,
          Staff_Email: this.staff_email,
          Start_Date: this.start,
          Title: this.title,
          Volunteer_Email: this.Volunteer_Email,
          Completed: this.completed
        })
        .then(docRef => {
          window.alert("Event created: ", docRef.id);
          this.$router.push({
            name: "dashboardStaff",
            params: { staffEmail: this.staff_email }
          });
          this.$refs.form_create.reset();
        })
        .catch(error => {
          console.error("Error adding event ", error);
        });
    }
  }
};
</script>
<style>
#create_card {
  margin-left: 15%;
}
</style>

