
<template>
    <div>
        <h1>This is Vue2 App</h1>
        <div id="parcel-react"></div>


    </div>
</template>
<script>

import { mountParcel } from '../main.js';
/* eslint-disable */
console.log(System) 
/* eslint-enable */
export default {
    name: 'parcelPage',
    
    mounted() {
        this.loadParcel();
    },
    methods:{
        loadParcel(){
            var domElement= document.getElementById('parcel-react');

            /* eslint-disable */
            mountParcel(()=>System.import('react-parcel'),{domElement})
            /* eslint-enable */
        }
    }
}


</script>