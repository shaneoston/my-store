import { Injectable } from '@angular/core'
import Product from '../../interfaces/Product.interface'
import Cart from '../../interfaces/Cart.interface'

@Injectable({
    providedIn: 'root',
})
export class ProductCartService {
    public cart = {
        items: [],
        customer: {},
        total: 0,
    }
    constructor() {}

    getNumberOfItemsInCart(): number {
        // @ts-ignore
        return this.cart.items.length
    }

    addToCart(product: Product, quantity: number): void {
        const item = this.cart.items.find((item) => {
            return product.id === item['id']
        })

        if (item) {
            const index = this.cart.items.indexOf(item)
            // @ts-ignore
            this.cart.items[index].quantity += 1
        } else {
            product.quantity = quantity
            // @ts-ignore
            this.cart.items.push(product)
        }
        alert(`Item ${product.name} added to cart`)
    }

    getCart(): Cart {
        return this.cart
    }

    addCustomer(customer: object): void {
        this.cart.customer = customer
    }

    resetCart(): void {
        this.cart = {
            items: [],
            customer: {},
            total: 0,
        }
    }
}
