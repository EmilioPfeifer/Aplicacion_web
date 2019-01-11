<template>
<!-- De momento, esta vista, sirve con login de entrada a la app-->
<section>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex md8 offset-md2>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="user.ID"
            :rules="rules"
            :counter="8"
            label="ID Empleado"
            required
          ></v-text-field>
          <v-text-field
            v-model="user.pass"
            :rules="rules"
            label="Pass"
            type="password"
            required
          ></v-text-field>
          <!-- Sin funcionalidades o Comprobaciones, solo un comprobante de prueba
          de momento, el boton solo sirve para ingresar directamente a la ventana principal -->
          <v-btn :disabled="!valid" @click="submit">Ingresar</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
import { EventBus } from '@/plugins/event-bus.js';

  export default {
    data: () => ({
      valid: true,
      user: {
        ID: '',
        pass: ''
      },
      rules: [
        v => !!v || 'Se requiere este campo.',
        v => v.length <= 8 || ''
      ]
    }),
    methods: {
      submit(){
        EventBus.$emit('Login', this.user);
      }
    }
  }
</script>
<!--<script src="https://www.gstatic.com/firebasejs/5.7.3/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvro9fGCvrRzvr6kRfOrr5K-d6UuRe7vA",
    authDomain: "web-app-d101e.firebaseapp.com",
    databaseURL: "https://web-app-d101e.firebaseio.com",
    projectId: "web-app-d101e",
    storageBucket: "web-app-d101e.appspot.com",
    messagingSenderId: "260306387650"
  };
  //firebase.initializeApp(config);
</script>-->