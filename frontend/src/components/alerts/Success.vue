<script>
    export default {
        props: ['modelValue','message'],
        emits: ['close'],
        
    }
</script>

<template>
    <div class="text-center ma-2">
        <v-snackbar :modelValue="modelValue" v-on:update:modelValue="$emit('close')" :timeout="2000" color="success" location="top">
            Item has been {{message}}..
            <template v-slot:actions>
                <v-btn variant="text" @click="$emit('close')">Close</v-btn>
            </template>
        </v-snackbar>
    </div>
</template>