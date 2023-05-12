
import { reactive } from "vue"
export const products = reactive({
    men: [
        {
            title: 'blanck jacket 1',
            image: 'black_elegant_leather_jacket-120x156.jpg',
            description: '',
            price: 19999,
            sale_price: 0.4
        },
        {
            title: 'blanck jacket 2',
            image: '',
            description: '',
            price: 1,
            sale_price: null

        }
    ],
    women: [
        {
            title: 'lorem ipsup is',
            image: '',
            description: '',
            price: 12,
            sale_price: null
        },
        {
            title: 'women blanck jacket 2',
            image: '',
            description: '',
            price: 11,
            sale_price: null
        }
    ],
    accessories: [
        {
            title: 'women blanck jacket 2',
            image: '',
            description: '',
            price: 11,
            sale_price: null
        }
    ]
})

