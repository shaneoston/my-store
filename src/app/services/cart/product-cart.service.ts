import { Injectable } from '@angular/core'
import Product from '../../interfaces/Product.interface'

@Injectable({
    providedIn: 'root',
})
export class ProductCartService {
    public cart: Array<Product> = []
    constructor() {}

    getNumberOfItemsInCart(): number {
        // @ts-ignore
        return this.cart.length
    }

    addToCart(product: Product, quantity: number): void {
        product.quantity = quantity
        this.cart.push(product)
        alert(`Item ${product.name} added to cart`)
    }

    getCart(): Array<Product> {
        return this.cart
    }
}
