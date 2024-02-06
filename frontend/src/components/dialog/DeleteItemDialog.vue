<script>
    export default {
        props: ['modelValue'],
        emits: ['cancel', 'delete']
    }
</script>

<template>
    <v-dialog :modelValue="modelValue" max-width="500px">
        <v-card>
        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="$emit('cancel')">Cancel</v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="$emit('delete')">OK</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
        </v-card>
    </v-dialog>
  </template>
