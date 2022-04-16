import { Component, OnInit } from '@angular/core'
import { ProductCartService } from '../../services/cart/product-cart.service'
import ProductInterface from '../../interfaces/Product.interface'

@Component({
    selector: 'app-product-cart',
    templateUrl: './product-cart.component.html',
    styleUrls: [],
})
export class ProductCartComponent implements OnInit {
    public cart: Array<ProductInterface> = [
        {
            id: 3,
            description: 'blabbbbb',
            name: 'Backpack',
            price: 79.99,
            quantity: 1,
            url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            category: null,
        },
    ]
    constructor(private cartService: ProductCartService) {}

    ngOnInit(): void {
        //this.cart = this.cartService.getCart()
    }
}
