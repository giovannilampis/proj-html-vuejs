
import { reactive } from "vue"
export const subSummary = reactive({

   featured: [
    {
        img: 'black_leather_jacket-120x156.jpg',
        title: 'Black Jacket',
        price: 125,
        sale_price: null
    },
    {
        img: 'black_elegant_leather_jacket-120x156.jpg',
        title: 'Black Leather Jacket',
        price: 2,
        sale_price: 1
    },
    {
        img: 'hipster_black_top-120x156.jpg',
        title: 'Hipster Balack Top',
        price: 57,
        sale_price: null
    }
   ],

   on_sale: [
    {
        img: 'black_elegant_leather_jacket-120x156.jpg',
        title: 'Black Leather Jacket',
        price: 235,
        sale_price: 200
    }, {
        img: 'blue_leather_jacket-120x156.jpg',
        title: 'Blue Leather Jacket',
        price: 80,
        sale_price: 60
    },
    {
        img: 'modern_leather_boots-120x156.jpg',
        title: 'Modern Leather Boots',
        price: 50,
        sale_price: 30
    }
   ],

   top_rated: [
    {
        img: 'leather_gloves-120x156.jpg',
        title: 'Leather Gloves',
        price: 45,
        sale_price: null
    },
    {
        img: 'black_elegant_leather_jacket-120x156.jpg',
        title: 'Black Leather Jacket',
        price: 235,
        sale_price: 200
    },
    {
        img: 'spring_printed_dress-120x156.jpg',
        title: 'Spring Printed Dress',
        price: 47,
        sale_price: null
    }

   ],

   latest_reviews: [
    {
        img: 'black_elegant_leather_jacket-120x156.jpg',
        title: 'Black Leather Jacket',
        author: 'admin'
    },
    {
        img: 'leather_gloves-120x156.jpg',
        title: 'Leather Gloves',
        author: 'Beardman'
    },
    {
        img: 'spring_printed_dress-120x156.jpg',
        title: 'Spring Printed Dress',
        author: 'admin'
    }

   ]
})

