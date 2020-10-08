const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 0,
            details: ["40% cotton","50% wool", "20% polyster"],
            variants: [
                { id: 2020, color: 'Green',image: './assets/images/socks_green.jpg'},
                { id: 2024, color: 'Blue', image: './assets/images/socks_blue.jpg'}
            ],
        }
    },
    methods: {
        addToCart() {
            return this.cart += 1;
        },
        updateImage(variantImage) {
            this.image = variantImage;
        }
    }
})