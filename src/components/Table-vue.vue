<template>

    <b-table
    :fields="header"
    :items="body"
    hover>
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