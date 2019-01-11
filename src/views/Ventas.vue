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
    :items="inventario"
    :search="search"
    hide-actions
    class="elevation-1"
    >
    <!-- Esta tabla visualiza los datos, tambien se pueden seleccionar para generar una venta. -->
    <template slot="items" slot-scope="props" v-if="!props.item.value">
        <tr @click="showDialog(props.item)">
        <td>{{ props.item.nombre }}</td>
        <td class="text-xs-left">{{ props.item.fechaAct }}</td>
        <td class="text-xs-left">{{ props.item.cant }}</td>
        <td class="text-xs-left">{{ props.item.precio }}</td>
        </tr>
    </template>
    </v-data-table>
  </v-container>

  <v-container grid-list-md text-xs-center id="compra">
      <Table :header="fields" :body="selectedList"/>
  </v-container>
  <v-btn id="btn" color="success" @click="siguiente">Siguente</v-btn>

  <v-dialog v-model="show" max-width="500">
    <v-card id="formulario">
      <v-card-title class="headline">{{ itemAdd.producto.nombre }}, disponibles: {{ itemAdd.producto.cant }}</v-card-title>
      <b-form @submit="onSubmit" @reset="onReset">

        <b-form-group id="InputGroup1" label="Cantidad:" label-for="Input1">
          <b-form-input id="Input1" type="text" v-model="itemAdd.producto.cantVenta" required placeholder="Cantidad">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Aceptar</b-button>
        <b-button type="reset" variant="danger">Cancelar</b-button>
      </b-form>
    </v-card>
  </v-dialog>

  <v-dialog v-model="confirmation" max-width="500">
    <v-card id="formulario">
      <v-card-title class="headline">Continuar?</v-card-title>
      <v-card-text>
        <p v-for="item in selectedList">{{item.cantVenta}} X {{item.nombre}} ${{item.cantVenta*item.precio}}</p>
        <p>valor venta: <strong>${{valorVenta}}</strong></p>
      </v-card-text>
      <b-form>
        <b-button variant="primary" @click="confirmar()">Aceptar</b-button>
        <b-button variant="danger" @click="confirmation= false">Cancelar</b-button>
      </b-form>
    </v-card>
  </v-dialog>
</section>
</template>

<script>
import Table from '@/components/Table-vue'

import DBService from '@/services/DBService'

import { EventBus } from '@/plugins/event-bus.js';

export default {
  data() {
    return {
      DBService: new DBService(),

      show: false,
      confirmation: false,
      itemAdd: {
        producto: Object
      },
      search: '',
      fields:[
        //'keys' para señalar que datos ver en la tabla, selecciona en cada objeto las coincidencia en el nombre de los atributos.
        { key: 'nombre', label: 'Nombre'},
        { key: 'cantVenta', label: 'Cantidad'},
        { key: 'actions', label: ''}
        //llama al slot especifico, que contiene los botones que actuaran en esta vista.
      ],
      //'selectedList' es el array para los objetos que se seleccionen en la primera tabla.
      selectedList:[],
      valorVenta: 0,
      //Contiene los datos de la venta a realizar.
      venta: {
        fecha: new Date().toISOString().substr(0, 10),
        lista: Array,
        valorVenta: Number
      },

      header: [
        //Asigna el nombre de las columnas y los datos que iran en estas.
          {
            text: 'Producto ()',
            align: 'left',
            sortable: true,
            value: 'nombre'
          },
          { text: 'Fecha Actualización', value: 'fechaAct' },
          { text: 'Cantidad', value: 'cant' },
          { text: 'Precio', value: 'precio' }
        ]
      }
  },
  created() {
    EventBus.$on('removeCompra', item => {
        this.inventario.push({
          value: item.value,
          nombre: item.nombre,
          fechaAct: item.fechaAct,
          ultMov: '-',
          cant: item.cant,
          precio: item.precio,
          iron: item.iron
        }),
        this.valorVenta = this.valorVenta-item.precio
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
        cantVenta: item.cantVenta,
        cant: item.cant,
        precio: item.precio,
        iron: item.iron
      }),
      this.inventario.splice(this.inventario.indexOf(item,0),1)
    },
    //metodo sin uso, sirve para ver el index del objeto seleccionado.
    //se uso en un principio para buscar solucion a un percance inicial.
    showDialog(item){
      this.show=true;
      this.itemAdd.producto = item;
    },
    onSubmit (evt) {
      if (this.itemAdd.producto.cantVenta==0) {
        this.onReset(evt)
      } else {
        evt.preventDefault();
        this.add(this.itemAdd.producto)
        this.show = false;
      }
    },
    onReset (evt) {
      evt.preventDefault();
      this.show = false;
    },
    siguiente(){
      this.valorVenta = 0;
      this.confirmation=true;
      this.valorTotalVenta();
    },
    confirmar(){
      this.venta.lista = this.selectedList;
      this.venta.valorVenta = this.valorVenta;
      let vm = this;
      vm.DBService.agregarVenta(this.venta);
      window.location.href = '/main';
    },
    valorTotalVenta () {
      this.selectedList.forEach(element => {
        for (let i = 0; i < element.cantVenta; i++) {
          this.valorVenta += element.precio; 
        }
      });
    }
  },
  computed: {
    inventario() {
      return this.DBService.getProductos();
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
    margin-top: 20px;
    width: 620px;
    float: right;
    margin-bottom: 20px;
  }
  #btn {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  #formulario {
    width: 500px;
    padding: 10px;
    border: solid #BDBDBD;
  }
</style>
