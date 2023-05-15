<script>

import { brandLogos } from '../store/brandLogos'

export default {
    name: 'BrandsComp',
    data() {
        return {
            brandLogos,
            start: 0,
            end: 5
        }
    },
    methods: {
        nextButton(){
            // i successi 5 elementi 
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
            // i successi 5 elementi 
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
            <p class="text-center text-uppercase">
                brand logos
            </p>
            <div class="flex">
                <div v-for="(logo, index) in brandLogos.slice(start,end)" :key="index" class="logo_container">
                    <img :src="'/images/' + logo" alt="">
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    background-color: $gray_light;
    height: 215px;
    position: relative;
}

.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.flex {
    @include display_between;
}

.logo_container {
    width: 12%;
}

</style>