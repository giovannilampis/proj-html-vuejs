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

        <img :src="'/images/' + current_tab.img" alt="{{ current_tab.name }}">

        <p>{{ current_tab.quote }}</p>

        <div>
            <span>{{ current_tab.name }}</span><span>{{ current_tab.position }}</span>
        </div>

        <div>
            <span @click="current_tab = man"><i class="fa-solid fa-circle"></i></span>
            <span @click="current_tab = woman"><i class="fa-solid fa-circle"></i></span>
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