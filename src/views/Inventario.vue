<template>
<section>
  <v-container grid-list-md text-xs-center>
    <!-- Barra de busqueda, para buscar el objeto especifico en la tabla; busca coincidencias en el nombre
    de los objetos. -->
    <b-form-input type="text" v-model="search" placeholder="Search..."/>
    <Table :header="fields" :body="filteredList"/>

    <v-dialog v-model="show" max-width="500">
      <v-card id="formulario">
        <v-card-title class="headline">{{ itemEdit.nombre }}, disponibles: {{itemEdit.cant}}</v-card-title>
        <b-form @submit="onSubmit" @reset="onReset">

            <b-form-group id="InputGroup1" label="Cantidad:" label-for="Input1">
              <b-form-input id="Input1" type="text" v-model="itemEdit.cant" required placeholder="Nueva Cantidad">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Aceptar</b-button>
            <b-button type="reset" variant="danger">Cancelar</b-button>

        </b-form>
      </v-card>
    </v-dialog>

  </v-container>
</section>
</template>

<script>
import Table from '@/components/Table-vue'
import datosJson from '@/Datos/materiales.json'

import { EventBus } from '@/plugins/event-bus.js';

export default {
  data() {
    return {
      search: '',
      fields:[
        //Llama a las variable, de objeto, que coincida con la 'key', para ordenar en columnas;
        //'label' asigna el nombre del encabezado de cada columna.
        { key: 'nombre', label: 'Nombre'},
        { key: 'fechaAct', label: 'Fecha Actualización'},
        { key: 'ultMov', label: 'Ultimo Movimiento'},
        { key: 'cant', label: 'Cantidad'},
        { key: 'actInvt', label: '' }
        //Se llama al slot especifico, el cual posee el boton que actuara en esta vista.
      ],//Cuerpo de datos para pruebas de los componentes.
        body: datosJson,

        show: false,
        itemEdit: Object
      }
  },
  components: {
      Table
  },
  computed: {
    //'filteredList' es un array, con el cual se visualiza la tabla, la datos que esten en este array dependeran...
    //del contenido de la barra 'input', esta filtrara el contenido, según el nombre, y asiganra un color segun la cantidad de este en el inventario.
    filteredList() {
      return this.body.filter(post => {
        if (post.cant==0) {
          post._rowVariant='danger';
        }else {
          post._rowVariant='success';
        }
        return post.nombre.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },methods: {

    setItem(item){
      this.show = true;
      this.itemEdit = item;
      this.itemEdit.cantOld = item.cant;
    },

    onSubmit (evt) {
      evt.preventDefault();
      this.show = false;
    },
    onReset (evt) {
      evt.preventDefault();
      this.itemEdit.cant = this.itemEdit.cantOld;
      this.show = false;
    }

  },
  created() {
    EventBus.$on('itemEdit', item => {
      this.setItem(item);
    });
  }
}
</script>

<style>
  #formulario {
        width: 500px;
        padding: 10px;
        border: solid #BDBDBD;
  }
</style>
