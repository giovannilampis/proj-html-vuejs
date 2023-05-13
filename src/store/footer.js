
import { reactive } from "vue"

export const topRatedProducts = reactive([
    {
        img: 'leather_gloves-120x156.jpg',
        name: 'Leather Gloves',
        price: 45,
        sale_price: null
    },
    {
        img: 'black_elegant_leather_jacket-120x156.jpg',
        name: 'Black Leather Jacket',
        price: 235,
        sale_price: 200
    },
    {
        img: 'spring_printed_dress-120x156.jpg',
        name: 'Printed Dress',
        price: 47,
        sale_price: null
    }
])

export const recentPost = reactive(
    [
        'Koopa troopa super mushroom buzzy',
        'beetle Mario B-button run life, plumber 1-up',
        'Super mushroom cheep cheep castle koopa paratroopa',
        'Blooper coin jump brick super mushroom',
        '1985 cloud slide spiny cloud, invincible Mario',
        'coin Mario Bros fire bar, green shell plumber'
    ]
)

export const tags = reactive([
    'black', 'boots', 'brown', 'casual', 'D & G', 'fabric', 'flowers', 'grey', 'hat', 'hipster', 'lines',
    'multi-purpose', 'New York', 'Outdoors', 'red', 'responsive', 'summer', 'sweater', 'Travel', 'Warm', 'White', 'winter'
])




