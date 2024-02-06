<script>
    import ActionsColumn from './ActionsColumn.vue'
    import {editItem, deleteItem} from '../../services/apiService'

    export default {
        components: {
            ActionsColumn
        },
        emits: ['refresh', 'error'],
        props: {
            data: Object,
            rowIndex: Number,
            headers: Object,
            category: String,
            type: String
        },
        data () {
            return {    
                tableHeaders: this.headers,
                index: this.rowIndex,
                item: this.data,
                defaultItemValue: JSON.parse(JSON.stringify(this.data)),
                isEdited: false,
            }
        },
        methods:{
            onEdit(){
                this.isEdited = true;
            },
            async onSave(){
                    try {
                        let res = await editItem(this.category, this.item._id, this.item)
                        console.log(res)
                        if(res.status == 200){
                            this.$emit('refresh', 'saved');
                        };
                    } catch (error) {
                        this.$emit('error',error);
                    }
            },
            onCancel(){
                this.isEdited = false;
                this.item = this.defaultItemValue;

            },
            async onDelete(){
                try {
                    let data = await deleteItem(this.category, this.item._id)
                    if(data.status == 200){ 
                        this.$emit('refresh', 'deleted');
                    };
                } catch (error) {
                    this.$emit('error',error);
                }
            }
        },   
    }
</script>

<template>
    <tr>
      <td v-for="(header, i) in this.tableHeaders" >
        <template v-if="header.value == '_id'">{{index+1}}</template>
        <template v-else>
          <template v-if="header.value == 'actions'">
            <ActionsColumn :edit="this.isEdited" @cancel="onCancel" @edit="onEdit" @delete="onDelete" @save="onSave"/>
          </template>
          <template v-else>
            <template v-if="this.isEdited && header.value != 'created' && header.value != 'edited'">
                <v-text-field v-model="item[header.value]" :rules="header.value == 'name'? [v=> !!v || 'Field is required']: []"></v-text-field>
            </template>
            <template v-else>
                {{item[header.value]}}
            </template>
            
          </template>
        </template>
      </td>
    </tr>
  </template>

<style>
    td input{
        font-size: 14px;
        padding: 0 .4em;
    }
</style>