<script>

import { testimonials } from '../store/testimonials'

export default {
    name: 'TestimonialsComp',
    data() {
        return {
            testimonials,
            current_tab: testimonials[0]
        }
    },
    methods: {
        changeCharacter() {
            this.current_tab = this.testimonials[1];
        },
        resetCharacter() {
            this.current_tab = this.testimonials[0];
        }
    }
}

</script>

<template>
    <section>
        <div class="container">
            <img :src="'/images/' + current_tab.img" alt="{{ current_tab.name }}">
    
            <p>{{ current_tab.quote }}</p>
    
            <div>
                <span>{{ current_tab.name }}</span><span>{{ current_tab.position }}</span>
            </div>
    
            <div>
                <span @click="changeCharacter"><i class="fa-solid fa-circle"></i></span>
                <span @click="resetCharacter"><i class="fa-solid fa-circle"></i></span>
            </div>
        </div>

        
    </section>
</template>

<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
    background-image: url('images/testimonials_home_1_bg.jpg');
    background-size: cover;
    width: 100%;
    height: 412px;
}

</style>