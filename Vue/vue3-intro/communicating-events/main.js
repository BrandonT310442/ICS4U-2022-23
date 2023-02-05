const app = Vue.createApp({
   data() {
     return {
       cart: [],
       
     }
   },
   methods: {
     updateCart(id) {
       this.cart.push(id)
     },

     removeCart(id){
      let index = this.cart.indexOf(id);

     this.cart.splice(index, 1)
     }
   }
 })
 