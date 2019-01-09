<template>
    <v-dialog v-model="show" max-width="500">
        <v-card id="formulario">
        <v-card-title class="headline">{{ itemAdd.producto.nombre}}, disponibles: {{ itemAdd.producto.cant }}</v-card-title>
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
</template>

<script>
import { EventBus } from '@/plugins/event-bus.js';

export default {
    
}
</script>
