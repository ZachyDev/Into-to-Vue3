const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 0,
            details: ["40% cotton","50% wool", "20% polyster"],
            variants: [
                { id: 2020, color: 'Green' },
                { id: 2024, color: 'Blue'}
            ],
        }
    }
})