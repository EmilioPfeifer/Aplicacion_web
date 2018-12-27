<template>
<section>
  <v-container grid-list-md text-xs-center>
    <!-- Barra de busqueda, para buscar el objeto especifico en la tabla; busca coincidencias en el nombre
    de los objetos. -->
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
        //Llama a las variable, de objeto, que coincida con la 'key', para ordenar en columnas;
        //'label' asigna el nombre del encabezado de cada columna.
        { key: 'nombre', label: 'Nombre'},
        { key: 'fechaAct', label: 'Fecha Actualización'},
        { key: 'ultMov', label: 'Ultimo Movimiento'},
        { key: 'cant', label: 'Cantidad'},
        { key: 'actInvt', label: '' }
        //Se llama al slot especifico, el cual posee el boton que actuara en esta vista.
      ],//Cuerpo de datos para pruebas de los componentes.
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
  }
}
</script>
