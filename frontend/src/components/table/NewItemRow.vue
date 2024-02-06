<script>
    import ActionsColumn from './ActionsColumn.vue'
    export default {
        components: {
            ActionsColumn
        },
        props: {
            data: Object
        },
        methods:{

        },

        data () {
            return {    
                headers: this.data.tableHeaders,
                // index: this.data.index,
                // item: this.data.item,
                // defaultItemValue: {},
                // isEdited: false
            }
        }
    }
</script>

<template>
    <tr>
      <td v-for="(header, i) in this.headers" >
        <template v-if="header.value == '_id'"></template>
        <template v-else>
          <template v-if="header.value == 'actions'">
            <ActionsColumn :edit="true" @cancel="onCancel" @save="onSave"/>
          </template>
          <template v-else>
            <template>
                <v-text-field></v-text-field>
            </template>            
          </template>
        </template>
      </td>
    </tr>
  </template>

<style>

</style>