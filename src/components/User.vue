<template>
  <b-table striped hover :items="items"></b-table>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  },
  props: {
    items: Array
  }
}
</script>