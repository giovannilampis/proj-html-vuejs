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
  
        <a class="button_header styled-button hover-button"></a>
  
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
    padding-right: 2rem;
  }

  li {
    margin-right: 2rem;
    @include display_between;
  }

  .fa-chevron-down {
    padding-left: 0.2rem;
  }

  .button_header {
    width: 10rem;
    background-color: $havelock_blue;
    color: $white;
    text-align: center;
    border: none;
    font-size: 0.9rem;
    padding: 0.6rem 0.8rem;
    border-radius: 14px;
    text-transform: uppercase;
  }

  .styled-button::before {
    content: "shop now!";
  }

  .button_header:hover {
    background-color: $shocking;
  }

  .hover-button:hover::before {
  content: "get avada now!";
}

  .fa-magnifying-glass {
    padding-left: 1rem;
  }

</style>
