import { Component, OnInit } from '@angular/core'
import { ProductCartService } from '../../services/cart/product-cart.service'
import Product from '../../interfaces/Product.interface'
import Cart from '../../interfaces/Cart.interface'

@Component({
    selector: 'app-product-cart',
    templateUrl: './product-cart.component.html',
    styleUrls: [],
})
export class ProductCartComponent implements OnInit {
    public cart: Cart = {
        items: [],
        customer: {},
        total: 0,
    }
    public cartTotal: string | undefined

    constructor(private cartService: ProductCartService) {}

    ngOnInit(): void {
        this.cart = this.cartService.getCart()
    }

    getCartTotal(): number {
        const total = parseFloat(
            this.cart.items
                .reduce((total: number, item: Product) => {
                    // @ts-ignore
                    return total + item.price * item.quantity
                }, 0)
                .toFixed(2)
        )
        this.cart.total = total
        return total
    }

    removeFromCart(cartItem: Product): void {
        const index = this.cart.items.findIndex((i) => cartItem.id === i.id)
        this.cart.items.splice(index, 1)
    }
}
