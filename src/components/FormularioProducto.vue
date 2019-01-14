<template>
    <v-card>
    <v-card-title class="headline">Nuevo Producto.</v-card-title>
    <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="InputGroup1" label="Nombre:" label-for="Input1">
            <b-form-input id="Input1" type="text" v-model="item.nombre" required placeholder="Nombre...">
            </b-form-input>
        </b-form-group>
        <b-form-group id="InputGroup2" label="Cantidad:" label-for="Input2">
            <b-form-input id="Input2" type="number" v-model="item.cantidad" required placeholder="Cantidad...">
            </b-form-input>
        </b-form-group>
        <b-form-group id="InputGroup3" label="Precio:" label-for="Input3">
            <b-form-input id="Input3" type="number" v-model="item.precio" required placeholder="Precio...">
            </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Aceptar</b-button>
        <b-button type="reset" variant="danger">Cancelar</b-button>
    </b-form>
    </v-card>
</template>

<script>
import DBService from '@/services/DBService'

import { EventBus } from '@/plugins/event-bus.js';

export default {
    data() {
        return {
            DBService: new DBService(),
            item: {
                nombre: '',
                cant: 0,
                precio: 0,
                fechaAct: new Date().toISOString().substr(0, 10),
                ultMov: '-',
            }
        }
    },
    methods: {
        onSubmit (evt) {
            evt.preventDefault();
            this.item.cant = parseFloat(this.item.cant);
            this.item.precio = parseFloat(this.item.precio);
            EventBus.$emit('newItem', this.item);
        },
        onReset (evt) {
            evt.preventDefault();
            EventBus.$emit('closeDialog');
        }
    }
}
</script>
