<script>

export default {
    name: 'JumboComp'
}

</script>

<template>
    <div class="jumbo_background">
        <img src="images/home1_slide_three_bg_2.jpg" alt="">
        <div class="text-center position-absolute">
            <h1>Brand New Arrivals</h1>
            <h3 class="text-uppercase">new collection from new york</h3>
            <div class="button-container">
                <button class="text-uppercase">view all</button>
                <button class="text-uppercase">lookbook</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

.jumbo_background {
    width: 100%;
    height: 482px;
    background-image: url('images/home1_slide_one_bg.jpg');
    position: relative;
}

.button-container {
    @include display_center;
}

</style>