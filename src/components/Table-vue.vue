<template>
<!-- Companente de table, el objetivo de este componente es mostrar los producto que se le entregen. -->
    <b-table
    show-empty
    :fields="header"
    :items="body"
    hover
    >
    <!-- Los template adicionales son para agregar botones, para utilizar metodos cuando se requieran;...
         cuales botones se visualizaran, dependera del listado de encaberados que se entrege en los parametros. -->
      <template slot="actions" slot-scope="row">
        <b-button size="sm" @click.stop="" class="mr-1">
          Modificar cantidad
        </b-button>
        <b-button size="sm" @click="remove(row.item, row.index)">
          Quitar
        </b-button>
      </template>
      <template slot="actInvt" slot-scope="row">
        <b-button size="sm" @click.stop="submitItem(row.item)" class="mr-1">
          Modificar
        </b-button>
      </template>
    </b-table>

    <!--<v-data-table
    :headers="header"
    :items="body"
    hide-actions
    class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.nombre }}</td>
      <td class="text-xs-left">{{ props.item.fechaAct }}</td>
      <td class="text-xs-left">{{ props.item.ultMov }}</td>
      <td class="text-xs-left">{{ props.item.cant }}</td>
      <td class="text-xs-left">{{ props.item.precio }}</td>
    </template>
    </v-data-table>

    Otra opcion para la tabla era la 'Data table' de 'Vuetify', pero no se encontraron metodos
    para generar cambios de color en las fila, lo que no compatibiliza con el planteamiento de la app.

    -->
</template>

<script>
import { EventBus } from '@/plugins/event-bus.js';

export default {
    data () {
      return {
        //
      }
    },
    props: {
      //Asigna el tipo de variable a los parametros, para que estos sepan que esperar recibir.
      header: Array,
      body: Array
    },
    methods: {
      remove(item, index) {
        EventBus.$emit('removeCompra', item);
        this.body.splice(index,1);
      },
      submitItem(item){
        EventBus.$emit('itemEdit', item);
      }
    }
  }
</script>