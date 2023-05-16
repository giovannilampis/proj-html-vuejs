<script>

export default {
    name: 'JumboComp'
}

</script>

<template>
    <div class="jumbo_background">
        <img src="images/home1_slide_three_bg_2.jpg" alt="">
        <div class="text-jumbo">
            <h1 class="pb-2">Brand New Arrivals</h1>
            <h3 class="text-uppercase pb-4">new collection from new york</h3>
            <div class="button-container">
                <button class="mx-2">view all</button>
                <button class="mx-2">lookbook</button>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

h1 {
    font-size: 3.5rem;
    font-weight: bold;
}

h3 {
    font-size: 1.5rem;
    font-weight: lighter;
}

.jumbo_background {
    width: 100%;
    height: 482px;
    background-image: url('images/home1_slide_one_bg.jpg');
    position: relative;
}

.button-container {
    @include display_center;
}

button {
    background-color: transparent;
    color: $white;
    border: 1px solid $white;
    padding: 0.8rem 1.2rem;
    text-transform: uppercase;
    border-radius: 16px;
}

.text-jumbo {
    @include absolute_center;
    color: $white;
    text-align: center;
}

</style>