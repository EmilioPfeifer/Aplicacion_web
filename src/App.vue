<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>{{ $route.name }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="/Main"
        target=""
      >
        <span class="mr-2">Return</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <!-- Utilizando Router, esta etiqueta llama al 'view' correspondiente, según la ruta. -->
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import { EventBus } from '@/plugins/event-bus.js';
import userJson from '@/Datos/User.json';

export default {
  name: 'App',
  data () {
    return {
      listUser: userJson,
      user: {
        ID: String,
        pass: String
      }
    }
  },
  created() {
    EventBus.$on('Login', user => {
      this.user.ID = user.ID;
      this.user.pass = user.pass;
      this.acceder();
    });
  },
  methods: {
    acceder(){
      this.listUser.forEach(elt => {
        if(elt.ID===this.user.ID){
          //if(elt.pas===this.user.pass){
            window.location.href = '/main';
          //}
        }
      });
    }
  }
}
</script>
