<script >

import TopHeaderComp from '../src/components/TopHeaderComp.vue';
import BottomHeaderComp from '../src/components/BottomHeaderComp.vue';
import JumboComp from '../src/components/JumboComp.vue';
import FeaturedProductsComp from '../src/components/FeaturedProductsComp.vue';
import CollectionsComp from '../src/components/CollectionsComp.vue';
import BestSellersComp from '../src/components/BestSellersComp.vue';
import OffersComp from '../src/components/OffersComp.vue';
import NewArrivalsComp from '../src/components/NewArrivalsComp.vue';
import QuoteComp from '../src/components/QuoteComp.vue';
import BlogArticlesComp from '../src/components/BlogArticlesComp.vue';
import SummaryComp from '../src/components/SummaryComp.vue';
import BrandsComp from '../src/components/BrandsComp.vue';
import SubscribeComp from '../src/components/SubscribeComp.vue';
import TopFooterComp from '../src/components/TopFooterComp.vue';
import DownFooterComp from '../src/components/DownFooterComp.vue';

export default{
    name: 'app',
    components: {
      TopHeaderComp,
      BottomHeaderComp,
      JumboComp,
      FeaturedProductsComp,
      CollectionsComp,
      BestSellersComp,
      OffersComp,
      NewArrivalsComp,
      QuoteComp,
      BlogArticlesComp,
      SummaryComp,
      BrandsComp,
      SubscribeComp,
      TopFooterComp,
      DownFooterComp
    }
  }

</script>

<template>

  <header>
 
    <TopHeaderComp/>
    <BottomHeaderComp/>

  </header>

  <main>

    <JumboComp/>
    <FeaturedProductsComp/>
    <CollectionsComp/>
    <BestSellersComp/>
    <OffersComp/>
    <NewArrivalsComp/>
    <QuoteComp/>
    <BlogArticlesComp/>
    <SummaryComp/>
    <BrandsComp/>
    <SubscribeComp/>

  </main>

  <footer>

    <TopFooterComp/>
    <DownFooterComp/>

  </footer>


</template>

<style lang="scss">
@use './style/main.scss';

</style>
