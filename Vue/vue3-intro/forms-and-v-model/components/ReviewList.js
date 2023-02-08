app.component('review-list', {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars and {{recommend(index)}} recommend this product.
          <br/>
          "{{ review.review }}"
          <br/>

        </li>
      </ul>
    </div>
  `,

  methods: {
    recommend(index){
        var str = this.reviews[index].recommend
        if (str=="Yes")
            return "Would"
        return "Wouldn't"
    }
  }
  },)