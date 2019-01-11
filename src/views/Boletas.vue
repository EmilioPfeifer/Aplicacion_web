<template>
  <v-container fluid grid-list-md>
    <v-flex xs12 sm6 md2>
      <v-menu
        ref="menu"
        :close-on-content-click="false"
        v-model="menu"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px">

        <v-text-field
          slot="activator"
          v-model="date"
          label="Picker in menu"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>

    </v-flex>

    <v-data-iterator
      :items="filteredList"
      content-tag="v-layout"
      hide-actions
      row
      wrap
    >
      <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg2>
        <v-card>
          <v-card-title><h4>{{ props.item.fecha }}</h4></v-card-title>
          <v-divider></v-divider>
          <v-list dense>
            <v-list-tile v-for="item in props.item.lista">
              <v-list-tile-content>{{ item.cantVenta }} x {{ item.nombre }}</v-list-tile-content>
              <v-list-tile-content class="align-end">${{ item.precio*item.cantVenta }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content><strong>Valor total:</strong></v-list-tile-content>
              <v-list-tile-content class="align-end"><strong>${{ props.item.valorVenta }}</strong></v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
import DBService from '@/services/DBService'
export default {
    data(){
        return{
            DBService: new DBService(),
            date: new Date().toISOString().substr(0, 10),
            menu: false/*,
            
            /*rowsPerPageItems: [4, 8, 12],
            pagination: {
                rowsPerPage: 4
            }*/
        }
    },
    computed: {
        Ventas() {
            return this.DBService.getVentas();
        },
        filteredList() {
            return this.Ventas.filter(dat => {
                return dat.fecha.toLowerCase().includes(this.date.toLowerCase())
            })
        }
    }
}
</script>
