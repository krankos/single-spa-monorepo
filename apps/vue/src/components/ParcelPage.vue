<template>
    <div>
        <h1>Vue 3</h1>
        <div id="parcel"></div>

    </div>
</template>
<script>
// import { getSystemErrorMap } from 'util'
import {mountParcel} from '../main.js'

// import Parcel from 'single-spa-vue/parcel'

// import { mountRootParcel } from 'single-spa'


// Object.getPrototypeOf(System).firstGlobalProp=true;

export default {
  name: 'parcelPage',
  mounted() {
      this.loadParcel()
  },
  methods: {
      loadParcel() {
        var domElement = document.getElementById('parcel')
        /*global System*/
        mountParcel(() => {
          // console.log(System.import("react-parcel"));
          return System.import("react-parcel")
}, { domElement })
        //mountRootParcel(() => System.import("sample-react-parcel"), { domElement })
      }
  }
}

// export default {
//     // name: 'parcelPage',
//     // mounted(){
//     //     this.loadParcel()
//     // },
//     // methods:{
//     //     loadParcel(){
//     //         var domElement = document.getElementById('parcel')
//     //         mountParcel(()=>System.import("react-parcel"),{domElement})
//     //     }
//     // }

//     components:{
//         Parcel
//     },
//     data(){
//         return {
//             parcelConfig: System.import('@org/react-parcel').then(ns=>ns.Widget),
//             mountParcel: mountRootParcel,
//             wrapWith:'div',
            
//         }
//     },
//     methods:{
//         getParcelProps(){
//             return{
//                 text: `Hello World`
//             }
//         },
//         parcelMounted(){
//             console.log("parcel mounted")
//         },
//         parcelUpdated(){
//             console.log("parcel updated")
//         }
//     }
    
// }
</script>
<style>
#parcel{
    margin: auto;
      width: 600px;
      height: 50%;
      border: 4px solid blue;
}
</style>