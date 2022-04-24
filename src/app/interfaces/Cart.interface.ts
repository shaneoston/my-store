import Product from './Product.interface'

interface Cart {
    items: Array<Product>
    customer: Object
    total: number
}

export default Cart
