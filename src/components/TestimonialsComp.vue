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
        },
        changePerson(){
            if(this.current_testimonial == 1) {
                this.current_testimonial = 0
            } else if(this.current_testimonial == 0){
                this.current_testimonial = 1
            } 
        },
        autoScroll(){
            setInterval( () => {
                this.changePerson()
            }, 1000 )
        }

    },
    mounted(){
        this.autoScroll()
    }
}

</script>


<template>
    <section>
        <div class="container h-100">
            
            <div class="text-center center_element">

                <img :src="'/images/' + testimonials[current_testimonial].img"
                     :alt="testimonials[current_testimonial].name">

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

div.container {
    position: relative;
}

.center_element {
    @include absolute_center;
}

img {
    width: 7rem;
    aspect-ratio: 1;
    margin-bottom: 2rem;
}

.circle_button {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid $white;
    margin-top: 1.5rem;
}

.active_button {
    background-color: $white;
}

</style>