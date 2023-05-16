<script>
import { bestSeller } from '../store/bestSeller'
export default {
    name: 'BestSellersComp',
    data() {
        return {
            bestSeller,
            start: 0,
            end: 5
        }
    },
    methods: {
        nextButton(){
            // i successivi 5 elementi 
            // incrementando indice di partenza e indice di fine
            if( this.end == this.bestSeller.length ){
                this.start = 0;
                this.end =  5;
            } else {
                this.start ++;
                this.end ++;
            }
        },
        prevButton(){
            // i successivi 5 elementi 
            // incrementando indice di partenza e indice di fine
            if ( this.start == 0 ) {
                this.start = this.bestSeller.length - 5;
                this.end = this.bestSeller.length;
            } else {
                this.start --;
                this.end --;
            }
        }
    }
}

</script>

<template>
    <section>
        <div class="container">

            <div class="title-container">
                <div class="line line-left"></div>
                <h2 class="title text-capitalize text-center fw-bold">Best Seller</h2>
                <div class="line line-right"></div>
            </div>

            <p>Must have products from our top sellers</p>
    
            <div class="slider_container">

                <div id="prev" @click="prevButton">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                
                <div class="row pictures">
                    <div class="col-2" v-for="img,index of bestSeller.slice(start,end)" :key="index">
                        <img :src="'/images/' + img" :alt="index">
                    </div>
                </div>

                <div id="next" @click="nextButton">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    height: 410px;
    margin-top: 8rem;
    text-align: center;
}

.slider_container {
    @include display_between;
}

.title-container {
  display: flex;
  align-items: center;
}

.line {
  flex-grow: 1;
  height: 2px;
  background-color: red;
  margin: 0 1rem;
}

.line-left {
  margin-right: 0;
}

.line-right {
  margin-left: 0;
}

.title {
  white-space: nowrap;
  padding: 0 1rem;
}

#prev,
#next {
    background-color: $edward;
    color: $white;
    width: 3rem;
    aspect-ratio: 1 / 2;
    cursor: pointer;
    @include display_center;
}


.pictures {
    justify-content: center;
    align-items: center;
}

</style>