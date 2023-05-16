
import { reactive } from "vue"

export const products = reactive({

    men: [
        {
            title: 'Black Leather Jacket',
            image: 'black_elegant_leather_jacket.jpg',
            description: 'Men, Jackets, Jeans',
            price: 235,
            sale_price: 200
        },
        {
            title: 'Black Leather Suit',
            image: 'black_leather_suit.jpg',
            description: 'Men, Jackets',
            price: 176,
            sale_price: null

        },
        {
            title: 'Black Jacket & Stripe Tee',
            image: 'blue_jacket_and_white_stripe_tee.jpg',
            description: 'Men, Jackets, Suits',
            price: 580,
            sale_price: null

        },
        {
            title: 'Modern Black Leather Suit',
            image: 'modern_black_leather_suit.jpg',
            description: 'Men, Jackets',
            price: 1,
            sale_price: null
        }
    ],
    women: [
        {
            title: 'Black Leather Jacket',
            image: 'black_leather_jacket.jpg',
            description: 'Women, Jackets',
            price: 210,
            sale_price: 155
        },
        {
            title: 'Hipster Black Top',
            image: 'hipster_black_top.jpg',
            description: 'Women, Shirts',
            price: 80,
            sale_price: 50
        },
        {
            title: 'Modern Love Tee',
            image: 'modern_love_tee.jpg',
            description: 'Women, Shirts',
            price: 75,
            sale_price: 60
        },
        {
            title: 'Printed Dress',
            image: 'spring_printed_dress.jpg',
            description: 'Women, Dresses',
            price: 90,
            sale_price: null
        }
    ],
    accessories: [
        {
            title: 'Brown Dress Shoes',
            image: 'brown_dress_shoes.jpg',
            description: 'Men, Accessories, Shoes',
            price: 170,
            sale_price: 130
        },
        {
            title: 'Casual Leather Belts',
            image: 'casual_leather_belts.jpg',
            description: 'Men, Accessories, Belts',
            price: 80,
            sale_price: 45

        },
        {
            title: 'Leather Gloves',
            image: 'leather_gloves.jpg',
            description: 'Men, Accessories, Gloves',
            price: 70,
            sale_price: 38

        },
        {
            title: 'Modern Leather Boots',
            image: 'modern_leather_boots.jpg',
            description: 'Men, Accessories, Shoes',
            price: 220,
            sale_price: 155

        }
    ]
})

