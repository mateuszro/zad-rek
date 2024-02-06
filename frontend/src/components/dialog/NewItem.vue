<script>

import {addItem} from '../../services/apiService'

export default {
    props: ['modelValue', 'newItem', 'category'],
    emits: ['close', 'refresh', 'error'],

    data (){
            return{
                item: null,
            }
    },

    methods: {
        // createEmptyItem(){
        //     let headers = JSON.parse(JSON.stringify(this.headers));
        //     let item = {}
        //     for (const property in headers) {
        //         console.log(`${property}: ${object[property]}`);
        //         item[property] = ''
        //     }

        //     console.log(headers)
         

        // },

        async submit(){
            const { valid } = await this.$refs.form.validate()
            if(valid){
                try {
                    let res = await addItem(this.category, this.item)
                    console.log(res)
                    if(res.status == 200){
                        this.$emit('refresh', 'saved');
                    };
                } catch (error) {
                    this.$emit('error',error);
                }
            }
            console.log(this.item)
        }
    },
    
    created() {
        this.item = JSON.parse(JSON.stringify(this.newItem))
    }
}
</script>

<template>
    <v-dialog :modelValue="modelValue" v-on:update:modelValue="$emit('close')" max-width="90%">
        <v-form ref="form" @submit.prevent="submit" >
        <v-card>
            <v-card-title class="text-center">
                <span class="text-h5">Add Item</span>
            </v-card-title>

            <v-card-text>
                
                    <v-container>
                        <v-row>
                            <v-col v-for="(value,key) in this.item" :key="key" md="2">
                                <v-text-field v-model="item[key]" :label="key" :rules="key == 'name'? [v=> !!v || 'Field is required']: []">
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
            </v-card-text> 

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="this.$emit('close')">
                    Cancel
                </v-btn>
                <v-btn color="blue-darken-1" type="submit" variant="text">
                    Save
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
    </v-dialog>
</template>