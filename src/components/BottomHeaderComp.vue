<script>

export default {
    name: 'BottomHeaderComp'
}

</script>

<template>

  <section>

    <header class="container d-flex justify-content-between align-items-center">
  
        <div class="logo_container">
            <img src="/images/classic_shop_logo2x.png" alt="logo">
        </div>
  
        <ul class="text-uppercase m-0 d-flex justify-content-between align-items-center">
  
            <li><a href="#">Home</a><i class="fa-solid fa-chevron-down"></i></li>
            <li><a href="#">Shop</a><i class="fa-solid fa-chevron-down"></i></li>
            <li><a href="#">Products</a><i class="fa-solid fa-chevron-down"></i></li>
            <li><a href="#">Categories</a><i class="fa-solid fa-chevron-down"></i></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Elements</a><i class="fa-solid fa-chevron-down"></i></li>
  
        </ul>
  
        <button>shop now!</button>
  
        <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
  
    </header>

  </section>


</template>


<style lang="scss" scoped>

@use '../style/partials/variables' as *;

@use '../style/partials/mixins' as *;

section {
  background-color: $white;
  height: 80px;
  border-top: 1px solid $edward;
  z-index: 1;
}

header {
    height: 100%;
    margin: 0 auto;
  }

  .logo_container {
    aspect-ratio: 4 / 1;
    height: 40px;
  }

  li {
    margin-right: 3rem;
  }

  .fa-chevron-down {
    padding-left: 0.8rem;
  }

  button {
    background-color: $havelock_blue;
    color: $white;
    border: none;
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
    border-radius: 12px;
    text-transform: uppercase;
  }

</style>
