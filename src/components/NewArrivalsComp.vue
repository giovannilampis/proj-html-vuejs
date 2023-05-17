<script>

import { new_arrivals } from '../store/new_arrivals'
export default {
    name: 'NewArrivalsComp',
    data() {
        return {
            new_arrivals,
            start: 0,
            end: 6
        }
    },
    methods: {
        nextButton(){
            // i successi 5 elementi 
            // incrementando indice di partenza e indice di fine
            if( this.end == this.new_arrivals.length ){
                this.start = 0;
                this.end =  6;
            } else {
                this.start ++;
                this.end ++;
            }
        },
        prevButton(){
            // i successi 5 elementi 
            // incrementando indice di partenza e indice di fine
            if ( this.start == 0 ) {
                this.start = this.new_arrivals.length - 6;
                this.end = this.new_arrivals.length;
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
        
        <div class="title-container">
                <div class="line line-left"></div>
                <h2>new arrivals</h2>
                <div class="line line-right"></div>
        </div>

        <p class="py-3">Brand new products from top designers</p>

        <div class="slider_container">

            <div id="prev" @click="prevButton">
                <i class="fa-solid fa-chevron-left"></i>
            </div>

            <div class="row">
                <div class="col-2" v-for="img,index of new_arrivals.slice(start,end)" :key="index">
                    <div class="image_container">
                        <img :src="'/images/' +img" :alt="index">
                        <i class="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>

            <div id="next" @click="nextButton">
                <i class="fa-solid fa-chevron-right"></i>
            </div>

        </div>

    </section>

</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;


section {
    width: 100%;
    height: 460px;
    text-align: center;
    margin: 6rem 0 6rem 0;
    padding-bottom: 22rem;
}

.title-container {
  display: flex;
  align-items: center;
}

h2 {
    @include title;
}

.line {
    @include line;
}

.line-left {
  margin-right: 0;
}

.line-right {
  margin-left: 0;
}

.slider_container {
    @include display_between;
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

#prev:hover, #next:hover {
    background-color: $fedora;
}

i.fa-chevron-left, i.fa-chevron-right  {
    font-size: 0.6rem;
}

.image_container {
    position: relative;
}

.fa-cart-shopping {
    @include absolute_center;
    font-size: 4rem;
    color: $white;
    cursor: pointer;
    display: none;
}

.col-2:hover .image_container > i{
    display: block;
}

.col-2:hover .image_container::before {
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background-color: rgba(226, 128, 177, 0.5);
}

</style>