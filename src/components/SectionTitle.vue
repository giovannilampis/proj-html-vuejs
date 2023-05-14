
<script>

export default {
    name: 'SectionTitle',
    data() {
        return {
            
        }
    },
}

</script>

<template>

    <div class="container">

        <hr>
        <div class="debug text_box">
            <h2>Featured Products</h2>
            <h3>Must have products from our top sellers</h3>
        </div>

    </div>
        
    </template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

.text_box {
    background-color: $white;
    width: fit-content;
    padding: 0 1rem;
    margin-top: -50px;
    z-index: 1000;
}

hr {
    height: 1px;
    background-color: #a0a5a5;
    border: none;
}

</style>