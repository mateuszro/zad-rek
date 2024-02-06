<script>

    export default {
        props: ['error'],
        emits: ['close'],
    }
</script>

<template>

    <v-alert v-if="error" :title="error.code" type="error" icon="$error" density="compact">
        {{ error.message}}<br>{{ error.response.data.message }}<br>
        <v-btn @click="$emit('close')">Close</v-btn>
    </v-alert>
</template>
