<script>
import { getAllItems, deleteItem } from '../../services/apiService'

import Error from '../alerts/Error.vue'
import Success from '../alerts/Success.vue'
import DeleteItemDialog from '../dialog/DeleteItemDialog.vue'
import TableRow from './TableRow.vue'
import NewItem from '../dialog/NewItem.vue'

export default {
  components: {
    Error,
    Success,
    DeleteItemDialog,
    TableRow,
    NewItem
  },
  props: {
    category: String
  },
  data() {
    return {
      loading: false,
      error: null,
      data: [],
      tableHeaders: [],
      addItemRow: false,
      showSuccessNotify: false,
      notifyMessage: ''
    }
  },
  methods: {
    async fetchData() {
      try {
        const res = await getAllItems(this.category);
        this.data = res.data;
        this.tableHeaders = this.generateTabHeaders(this.data)
        this.loading = false;
      } catch (error) {
        this.error = error;
        console.error(error);
      }
    },

    generateTabHeaders(data) {
      if (data.length > 0) {
        let headers = Object.keys(data[0]).map(key => ({ title: key.replace('_', ' ').trim().toUpperCase(), value: key }))
        //add actions column
        headers.push({ title: 'Actions', value: 'actions', sortable: false })
        return this.filterHeaders(headers)
      }
      return []

    },

    filterHeaders(data) {
      let headersToRemove = ['FILMS', 'SPECIES', 'VEHICLES', 'STARSHIPS', 'URL', 'RESIDENTS', 'PILOTS']
      return data.filter(el => !headersToRemove.includes(el.title));
    },

    async onRefresh(message) {
      this.loading = true;
      this.showSuccessNotify = true;
      this.notifyMessage = message
      this.fetchData(this.category)
  
      if(message =="saved"){
        this.addItemRow = false;
      }
    },
    onError(error) {
      this.error = error
    },


  },
  mounted() {
    this.loading = true;
    this.fetchData(this.category)
  },

  computed: {
    addItemBtnText() {
      return this.addItemRow ? 'Cancel' : 'New Item'
    },
    newItemObject() {
      let item = JSON.parse(JSON.stringify(this.data[0]))
      for (const [key, value] of Object.entries(item)) {
        item[key] = ''
      }
      delete item._id
      delete item.created
      delete item.edited

      return item
    }

  }
}
</script>



<template>
  <Error :error="error" @close="this.error = null" />
  <Success :modelValue="showSuccessNotify" :message="this.notifyMessage" @close="showSuccessNotify = false" />


  <NewItem v-if="addItemRow" :category="category" :modelValue="addItemRow" :newItem="newItemObject"
    @close="this.addItemRow = false" @refresh="onRefresh" @error="onError" />




  <v-card flat>

    <v-data-table :headers="tableHeaders" :items="this.data" :loading="loading && !error" hover>

      <template v-slot:loading>
        <v-skeleton-loader type="table-tbody@2"></v-skeleton-loader>
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-btn variant="elevated" color="primary" dark class="mb-2" @click="addItemRow = !addItemRow">
            {{ addItemBtnText }}
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:item="{ item, index }">
        <TableRow :data="item" :rowIndex="index" :headers="tableHeaders" :category="category" @refresh="onRefresh"
          @error="onError" />
      </template>
    </v-data-table>
  </v-card>
</template>