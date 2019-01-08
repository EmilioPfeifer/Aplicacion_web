<template>
<section id="container">
  <!-- View con doble tabla, una 'Data table' (Vuetify) y otra 'b-table' (Vue-Bootstrap), componente llamado. -->
  <v-container grid-list-md text-xs-center id="venta">
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Producto..."
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
    :headers="header"
    :items="body"
    :search="search"
    hide-actions
    class="elevation-1"
    >
    <!-- Esta tabla visualiza los datos, tambien se pueden seleccionar para generar una venta. -->
    <template slot="items" slot-scope="props" v-if="!props.item.value">
        <tr @click="add(props.item, props.index)">
        <td>{{ props.item.nombre }}</td>
        <td class="text-xs-left">{{ props.item.fechaAct }}</td>
        <td class="text-xs-left">{{ props.item.ultMov }}</td>
        <td class="text-xs-left">{{ props.item.cant }}</td>
        <td class="text-xs-left">{{ props.item.precio }}</td>
        </tr>
    </template>
    </v-data-table>
  </v-container>
    <v-container grid-list-md text-xs-center id="compra">
        <Table :header="fields" :body="selectedList"/>
    </v-container>
    <v-btn id="btn" color="success">Siguente</v-btn>
</section>
</template>

<script>
import Table from '@/components/Table-vue'

import { EventBus } from '@/plugins/event-bus.js';

export default {
  data() {
    return {
      search: '',
      fields:[
        //'keys' para señalar que datos ver en la tabla, selecciona en cada objeto las coincidencia en el nombre de los atributos.
        { key: 'nombre', label: 'Nombre'},
        { key: 'cant', label: 'Cantidad'},
        { key: 'actions', label: ''}
        //llama al slot especifico, que contiene los botones que actuaran en esta vista.
      ],
      //'selectedList' es el array para los objetos que se seleccionen en la primera tabla.
      selectedList:[],
      header: [
        //Asigna el nombre de las columnas y los datos que iran en estas.
          {
            text: 'Producto ()',
            align: 'left',
            sortable: true,
            value: 'nombre'
          },
          { text: 'Fecha Actualización', value: 'fechaAct' },
          { text: 'Ultimo Movimiento', value: 'ultMov' },
          { text: 'Cantidad', value: 'cant' },
          { text: 'Precio', value: 'precio' }
        ],
        //Datos de prueba para ver el funcionamiento de las tablas.
        body: [
          {
            value: false,
            nombre: 'Galletero',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 24,
            precio: 4.0,
            descuento: '1%'
          },
          {
            value: false,
            nombre: 'Vigas',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 37,
            precio: 4.3,
            descuento: '1%'
          },
          {
            value: false,
            nombre: 'PVC',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 23,
            precio: 6.0,
            descuento: '7%'
          },
          {
            value: false,
            nombre: 'Clavos',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 67,
            precio: 4.3,
            descuento: '8%'
          },
          {
            value: false,
            nombre: 'Lona',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 49,
            precio: 3.9,
            descuento: '25%'
          },
          {
            value: false,
            nombre: 'Martillo',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 94,
            precio: 0.0,
            descuento: '0%'
          },
          {
            value: false,
            nombre: 'Sierra Circular',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 98,
            precio: 0,
            descuento: '20%'
          },
          {
            value: false,
            nombre: 'Cables',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 87,
            precio: 6.5,
            descuento: '50%'
          },
          {
            value: false,
            nombre: 'Paller',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 51,
            precio: 4.9,
            descuento: '10%'
          },
          {
            value: false,
            nombre: 'Electrodos',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 65,
            precio: 7,
            descuento: '25%'
          }
        ]
      }
  },
  created() {
    EventBus.$on('removeCompra', item => {
        this.body.push({
          value: item.value,
          nombre: item.nombre,
          fechaAct: item.fechaAct,
          ultMov: '-',
          cant: 1,
          precio: item.precio,
          iron: item.iron
        })
    });
  },
  components: {
      Table
  },
  methods: {
    //metodo para asignar el objeto seleccionado al array 'selectedList'.
    add(item){
      this.selectedList.push({
        value: item.value,
        nombre: item.nombre,
        fechaAct: item.fechaAct,
        cant: 1,
        precio: item.precio,
        iron: item.iron
      }),
      this.body.splice(this.body.indexOf(item,0),1)
    },
    //metodo sin uso, sirve para ver el index del objeto seleccionado.
    //se uso en un principio para buscar solucion a un percance inicial.
    showAlert(item){
      alert(this.body.indexOf(item,0))
    }
  }
}
</script>
<style>
  #venta {
    width: 725px;
    float: left;
  }
  #compra {
    width: 620px;
    float: right;
    margin-bottom: 20px;
  }
  #btn {
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
