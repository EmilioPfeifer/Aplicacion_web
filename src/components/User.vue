<!-- Componente tabla para ver a los usuarios de la app, de momento no esta en uso. -->
<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  },
  props: {
    //Asigna un tipo de variable al parametro.
    items: Array
  }
}
</script>