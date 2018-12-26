<template>
<section>
  <v-container grid-list-md text-xs-center>
    <b-form-input type="text" v-model="search" placeholder="Search..."/>
    <Table :header="fields" :body="filteredList"/>
  </v-container>
</section>
</template>

<script>
import Table from '@/components/Table-vue'

export default {
  data() {
    return {
      search: '',
      fields:[
        { key: 'nombre', label: 'Nombre'},
        { key: 'fechaAct', label: 'Fecha Actualización'},
        { key: 'ultMov', label: 'Ultimo Movimiento'},
        { key: 'cant', label: 'Cantidad'},
        { key: 'actInvt', label: '' }
      ],
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
            cant: 0,
            precio: 4.0,
            iron: '1%',
            _rowVariant: ''
          },
          {
            value: true,
            nombre: 'Vigas',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 37,
            precio: 4.3,
            iron: '1%',
            _rowVariant: ''
          },
          {
            value: false,
            nombre: 'PVC',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 23,
            precio: 6.0,
            iron: '7%',
            _rowVariant: ''
          },
          {
            value: false,
            nombre: 'Clavos',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 67,
            precio: 4.3,
            iron: '8%',
            _rowVariant: ''
          },
          {
            value: false,
            nombre: 'Lona',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 49,
            precio: 3.9,
            iron: '16%',
            _rowVariant: ''
          },
          {
            value: false,
            nombre: 'Martillo',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 94,
            precio: 0.0,
            iron: '0%',
            _rowVariant: ''
          },
          {
            value: false,
            nombre: 'Sierra Circular',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 0,
            precio: 0,
            iron: '2%',
            _rowVariant: ''
          },
          {
            value: false,
            nombre: 'Cables',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 87,
            precio: 6.5,
            iron: '45%',
            _rowVariant: ''
          },
          {
            value: false,
            nombre: 'Paller',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 51,
            precio: 4.9,
            iron: '22%',
            _rowVariant: ''
          },
          {
            value: false,
            nombre: 'Electrodos',
            fechaAct: '16/17/18',
            ultMov: '-',
            cant: 65,
            precio: 7,
            iron: '6%',
            _rowVariant: ''
          }
        ]
      }
  },
  components: {
      Table
  },
  computed: {
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
  }
}
</script>
