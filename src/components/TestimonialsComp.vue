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
            
            <div class="text-center">

                <img style="height: 40px; width: 40px;"  
                :src="'/images/' + testimonials[current_testimonial].img" :alt="testimonials[current_testimonial].name">

                <p>{{ testimonials[current_testimonial].quote }}</p>

                <p>{{ testimonials[current_testimonial].name }}, {{ testimonials[current_testimonial].position }} </p>

                <div>
                    <button class="circle_button mx-2" v-for="element,index of testimonials" :key="index" 
                            @click="changeTestimonial(index)"
                            :class="{ 'active_button': index === current_testimonial }">
                    </button>
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

.circle_button {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid $white;
}

.active_button {
    background-color: $white;
}

</style>