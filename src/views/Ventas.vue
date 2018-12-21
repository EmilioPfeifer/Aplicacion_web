<template>
<section>
  <v-container grid-list-md text-xs-center>
    <v-data-table
    :headers="header"
    :items="body"
    hide-actions
    class="elevation-1"
    >
    <template slot="items" slot-scope="props" v-if="!props.item.value">
        <tr @click="showAlert(props.item)">
        <td>{{ props.item.nombre }}</td>
        <td class="text-xs-left">{{ props.item.fechaAct }}</td>
        <td class="text-xs-left">{{ props.item.ultMov }}</td>
        <td class="text-xs-left">{{ props.item.cant }}</td>
        <td class="text-xs-left">{{ props.item.precio }}</td>
        </tr>
    </template>
    </v-data-table>
  </v-container>
    <v-container grid-list-md text-xs-center>
        <Table :header="fields" :body="selectedList"/>
    </v-container>
    <v-btn color="success">Siguente</v-btn>
</section>
</template>

<script>
import Table from '@/components/Table-vue'

export default {
  data() {
    return {
      search: '',
      fields:['nombre','fechaAct','ultMov','cant'],
      selectedList:[],
      header: [
          {
            text: 'Producto ()',
            align: 'left',
            sortable: false,
            value: 'nombre'
          },
          { text: 'Fecha Actualización', value: 'fechaAct' },
          { text: 'Ultimo Movimiento', value: 'ultMov' },
          { text: 'Cantidad', value: 'cant' },
          { text: 'Precio', value: 'precio' }
        ],
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
  components: {
      Table
  },
  methods: {
    add(item){
      this.selectedList.push({
            value: item.value,
            nombre: item.nombre,
            fechaAct: item.fechaAct,
            ultMov: item.ultMov,
            cant: item.cant,
            precio: item.precio,
            iron: item.iron
      }),
      this.body.splice(this.body.indexOf(item,1),1)
    },
    showAlert(item){
      alert(this.body.indexOf(item,1))
    }
  }
}
</script>