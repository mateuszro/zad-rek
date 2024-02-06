<script>
    import DeleteItemDialog from '../dialog/DeleteItemDialog.vue';
    export default {
        components: {
            DeleteItemDialog
        },
        props: ['edit', 'newItem'],
        emits: ['edit', 'save', 'delete', 'cancel'],

        data (){
            return{
                showDeleteDialog: false
            }
        },
        methods:{
            onDelete(){
                this.$emit('delete');
                this.showDeleteDialog = false;
            }
        }
    }
</script>

<template>
    <DeleteItemDialog :modelValue="showDeleteDialog" @cancel="showDeleteDialog = false" @delete="onDelete()"/>

    <template v-if="this.edit || this.newItem ">
        <v-icon size="small" class="me-2" @click="$emit('save')"> 
            mdi-content-save
        </v-icon>
        <template v-if="!this.newItem">
            <v-icon size="small" @click="$emit('cancel')">
                mdi-cancel
            </v-icon>
        </template>
    </template>

    <template v-else>
        <v-icon size="small" class="me-2" @click="$emit('edit')">
            mdi-pencil
        </v-icon>
        <v-icon size="small" @click="showDeleteDialog = true">
            mdi-delete
        </v-icon>
    </template>
    
</template>