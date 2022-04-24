import { Component, OnInit } from '@angular/core'
import { ProductCartService } from '../../services/cart/product-cart.service'
import Cart from '../../interfaces/Cart.interface'
import Customer from '../../interfaces/Customer.interface'
import Product from '../../interfaces/Product.interface'

@Component({
    selector: 'app-sale-confirmation',
    templateUrl: './sale-confirmation.component.html',
    styleUrls: [],
})
export class SaleConfirmationComponent implements OnInit {
    public cart: Cart = {
        customer: {} as Customer,
        items: [] as Product[],
        total: 0,
    }
    public customerName: string | undefined

    constructor(private cartService: ProductCartService) {}

    ngOnInit(): void {
        this.cart = this.cartService.getCart()
        // @ts-ignore
        this.customerName = this.cart.customer.value.fullName as string
    }
}
