<script>
  import Table from './table/Table.vue'


  export default {
    components: {
      Table
    },
    data: () => ({
      tab: null,
      categories: [
        {id:1, name:'people'},
        {id:2, name:'planets'},
        {id:3, name:'starships'},]
    }),
  }

</script>

<template>
    <v-card style="width: 100%;">
      <v-tabs v-model="tab" bg-color="primary" align-tabs="center"> 
        <v-tab v-for="category in categories" :key="category.id" :value="category.name">{{category.name}}</v-tab>
      </v-tabs>

        <v-window v-model="tab">
          <v-window-item v-for="category in categories" :key="category.id" :value="category.name">
            <Table :category="category.name"/>
          </v-window-item>
        </v-window>
    </v-card>
</template>