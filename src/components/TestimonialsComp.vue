<script>

import { testimonials } from '../store/testimonials'

export default {
    name: 'TestimonialsComp',
    data() {
        return {
            testimonials,
            current_tab: 'man'
        }
    }
}

</script>

<template>
    <section>
        <div class="container">
            <img :src="'/images/' + current_tab.img" :alt="current_tab.name">
    
            <p>{{ current_tab.quote }}</p>
    
            <div>
                <span>{{ current_tab.name }}</span><span>{{ current_tab.position }}</span>
            </div>
    
            <div>
                <span @click="current_tab = index" v-for="(tab, index) of testimonials" :key="index" class="select-category"><i class="fa-solid fa-circle">{{ index }}</i></span>
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

</style>