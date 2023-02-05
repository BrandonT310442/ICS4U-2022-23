app.component('product-display', {
   props: {
      premium: {
         type: Boolean,
         required: true
      }
   },
   template:
/*html*/`<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div 
          v-for="(variant, index) in variants" 
          :key="variant.id" 
          @mouseover="updateVariant(index)" 
          class="color-circle" 
          :style="{ backgroundColor: variant.color }">
        </div>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>
        <product-review @review-submitted="addReview"></product-review>

      </div>
    </div>
    
  </div>`,
   data() {
      return {
         product: 'Socks',
         brand: 'Vue Mastery',
         selectedVariant: 0,
         details: ['50% cotton', '30% wool', '20% polyester'],
         variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
         ]
      }
   },
   methods: {
      addToCart() {
         this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      updateVariant(index) {
         this.selectedVariant = index
      }
   },
   computed: {
      title() {
         return this.brand + ' ' + this.product
      },
      image() {
         return this.variants[this.selectedVariant].image
      },
      inStock() {
         return this.variants[this.selectedVariant].quantity
      },
      shipping() {
         if (this.premium) {
            return 'Free'
         }
         return 2.99
      }
   }
})

app.component('product-review', {
   template: `
     <form class="review-form" @submit.prevent="onSubmit">
     
       <p class="error" v-if="errors.length">
         <b>Please correct the following error(s):</b>
         <ul>
           <li v-for="error in errors">{{ error }}</li>
         </ul>
       </p>

       <p>
         <label for="name">Name:</label>
         <input id="name" v-model="name">
       </p>
       
       <p>
         <label for="review">Review:</label>      
         <textarea id="review" v-model="review"></textarea>
       </p>
       
       <p>
         <label for="rating">Rating:</label>
         <select id="rating" v-model.number="rating">
           <option>5</option>
           <option>4</option>
           <option>3</option>
           <option>2</option>
           <option>1</option>
         </select>
       </p>

       <p>Would you recommend this product?</p>
       <label>
         Yes
         <input type="radio" value="Yes" v-model="recommend"/>
       </label>
       <label>
         No
         <input type="radio" value="No" v-model="recommend"/>
       </label>
           
       <p>
         <input type="submit" value="Submit">  
       </p>    
     
   </form>
   `,
   data() {
     return {
       name: null,
       review: null,
       rating: null,
       recommend: null,
       errors: []
     }
   },
   methods: {
     onSubmit() {
       this.errors = []
       if(this.name && this.review && this.rating && this.recommend) {
         let productReview = {
           name: this.name,
           review: this.review,
           rating: this.rating,
           recommend: this.recommend
         }
         this.$emit('review-submitted', productReview)
         this.name = null
         this.review = null
         this.rating = null
         this.recommend = null
       } else {
         if(!this.name) this.errors.push("Name required.")
         if(!this.review) this.errors.push("Review required.")
         if(!this.rating) this.errors.push("Rating required.")
         if(!this.recommend) this.errors.push("Recommendation required.")
       }
     }
   }
 })