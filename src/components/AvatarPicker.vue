<template>
    <v-dialog :fullscreen="$vuetify.breakpoint.xs" width="500" transition="dialog-bottom-transition" v-model="show">
        <v-card>
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="show = false">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Select an Avatar</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-layout row wrap v-if="avatars">
                <v-flex
                    v-for="avatar in avatars"
                    :key="avatar.id"
                    xs4 sm3
                    d-flex>
                    <v-card tile flat class="d-flex">
                        <v-card-text class="d-flex">
                            <v-avatar
                                size="96"
                                @click="selectAvatar(avatar)"
                                class="avatar-picker-avatar"
                                :class="{ 'current': avatar.id === currentAvatar }">
                                <img :src="'/avatars/' + (avatar.path)">
                            </v-avatar>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: {
    currentAvatar: {
      type: String,
      required: true
    },
    value: Boolean
  },
  async mounted() {
    await this.$store.dispatch("fetchAvatars");
  },
  computed: {
    avatars() {
      return this.$store.state.avatars;
    },
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    selectAvatar(avatar) {
      this.$emit("selected", avatar.id);
      this.show = false;
    }
  }
};
</script>
 index.js
export const state = () => ({
    avatars: {}
})

export const mutations = {
    setAvatars (state, avatars) {
        state.avatars = avatars
    }
}

export const actions = {
    fetchAvatars ({ commit, state }) {
        if (Object.keys(state.avatars).length) {
            return state.avatars
        }

        let avatars = {}
        let files = require.context('~/static/avatars', true, /\.png$/i)
        files.keys().map((key) => {
            let id = key.split('/').pop().split('.')[0].substring(7).toUpperCase()
            avatars[id] = {
                path: key.split('/').pop(),
                id: id
            }
        })

        commit('setAvatars', avatars)
    }
}
 profile.vue
<template>
    <v-container fluid>
        <v-layout column>
            <v-card>
                <v-card-text>
                    <v-flex class="mb-4">
                        <v-avatar size="96" class="mr-4">
                            <img :src="'/avatars/avatar_' + (form.avatar.toLowerCase()) + '.png'" alt="Avatar">
                        </v-avatar>
                        <v-btn @click="openAvatarPicker">Change Avatar</v-btn>
                    </v-flex>
                    <v-text-field
                        v-model="form.firstName"
                        label="FirstName"></v-text-field>
                    <v-text-field
                        v-model="form.lastName"
                        label="Last Name"></v-text-field>
                    <v-text-field
                        v-model="form.contactEmail"
                        label="Email Address"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" :loading="loading" @click.native="update">
                        <v-icon left dark>check</v-icon>
                        Save Changes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-layout>
        <avatar-picker
            v-model="showAvatarPicker"
            :current-avatar="form.avatar"
            @selected="selectAvatar"></avatar-picker>
    </v-container>
</template>

<script>
export default {
  props: {
    currentAvatar: {
      type: String,
      required: true
    },
    value: Boolean
  },
  async mounted() {
    await this.$store.dispatch("fetchAvatars");
  },
  computed: {
    avatars() {
      return this.$store.state.avatars;
    },
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  },
  methods: {
    selectAvatar(avatar) {
      this.$emit("selected", avatar.id);
      this.show = false;
    }
  }
};
</script>