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
            // i successivi 5 elementi 
            // incrementando indice di partenza e indice di fine
            if( this.end == this.brandLogos.length ){
                this.start = 0;
                this.end =  5;
            } else {
                this.start ++;
                this.end ++;
            }
        },
        autoScroll() {
            setInterval( () => {
                this.nextButton()
            }, 1000 )
        }
    },

    mounted(){
        this.autoScroll()
    },
}

</script>

<template>
    <section>
        <div class="container">
            <p class="text-center text-uppercase">
                brand logos
            </p>
            <div class="row logos">
                <div v-for="logo,index of brandLogos.slice(start,end)" :key="index" class="col-2">
                    <img :src="'/images/' + logo" alt="index">
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

.logos {
    justify-content: center;
    align-items: center;
}

</style>