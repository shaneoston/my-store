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
    public customerName: string | undefined
    public sale: Cart = {
        customer: {} as Customer,
        items: [] as Product[],
        total: 0,
    }

    constructor(private cartService: ProductCartService) {}

    ngOnInit(): void {
        this.sale = Object.assign({}, this.cartService.getCart())
        // @ts-ignore
        this.customerName = this.sale.customer.value.fullName as string
    }

    ngOnDestroy() {
        this.cartService.resetCart()
    }
}
