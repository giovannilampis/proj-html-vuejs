<script>

export default {
    name: 'BottomHeaderComp'
}

</script>

<template>

  <section>
    <header class="d-flex justify-content-between align-items-center">
  
        <div>
            <img src="/images/classic_shop_logo2x.png" alt="logo">
        </div>
  
        <ul class="text-uppercase m-0 d-flex justify-content-between align-items-center">
  
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Elements</a></li>
  
        </ul>
  
        <button class="text-uppercase">shop now!</button>
  
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
    height: 6rem;
    width: 85%;
    margin: 0 auto;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    margin-right: 3rem;
    color: black;
  }

  ul li:hover a{
    color: rgba(2, 130, 249, 1);
    border-bottom: 2px solid rgba(2, 130, 249, 1);
  }

  header ul li {
    color: black;
    list-style-type: none;
   
  }

</style>
