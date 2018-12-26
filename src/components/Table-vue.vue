<template>

    <b-table
    show-empty
    :fields="header"
    :items="body"
    hover
    >
        <template slot="actions" slot-scope="row">
          <b-button size="sm" @click.stop="" class="mr-1">
            Modicar cantidad
          </b-button>
          <b-button size="sm" @click.stop="">
            Quitar
          </b-button>
        </template>
        <template slot="actInvt" slot-scope="row">
          <b-button size="sm" @click.stop="" class="mr-1">
            Modicar
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
    -->
</template>

<script>
export default {
    data () {
      return {
        //
      }
    },
    props: {
      header: Array,
      body: Array
    }
  }
</script>