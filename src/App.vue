<template>
  <v-app>
    <router-view>

    </router-view>
  </v-app>
</template>

<script>
import LoginforStaff from './components/LoginforStaff';
import LoginforVolunteers from './components/LoginforVolunteers';
import Register from './components/Register';

export default {
  name: 'App',
  components: {
    LoginforStaff,
    LoginforVolunteers,
    Register,
  },
  data: () => ({
    //
  }),
};
</script>
