<script>

import { testimonials } from '../store/testimonials'

export default {
    name: 'TestimonialsComp',
    data() {
        return {
            testimonials,
            current_testimonial: 0
        }
    },
    methods: {
        changeTestimonial(index){
            this.current_testimonial = index;
        }
    }
}

</script>


<template>
    <section>
        <div class="container relative h-100">
            
            <div class="">
                <img style="height: 40px; width: 40px;"  
                :src="'/images/' + testimonials[current_testimonial].img" alt="">
                {{ testimonials[current_testimonial].name }}

                <div>
                    <button v-for="_,index of testimonials" :key="index" @click="changeTestimonial(index)">O</button>
                </div>
            </div>
    
            
        </div>

        
    </section>
</template>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    background-image: url('images/testimonials_home_1_bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 412px;
}

.centrato {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>