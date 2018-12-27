<template>
<!-- De momento, esta vista, sirve con login de entrada a la app-->
<section>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex md8 offset-md2>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="id"
            :rules="rules"
            :counter="8"
            label="ID Empleado"
            required
          ></v-text-field>
          <v-text-field
            v-model="pass"
            :rules="rules"
            label="Pass"
            required
          ></v-text-field>
          <!-- Sin funcionalidades o Comprobaciones, solo un comprobante de prueba
          de momento, el boton solo sirve para ingresar directamente a la ventana principal -->
          <v-btn :disabled="!valid" href="/Main">Ingresar</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</section>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      rules: [
        v => !!v || 'Se requiere este campo.',
        v => v.length <= 8 || ''
      ]
    })
  }
</script>
