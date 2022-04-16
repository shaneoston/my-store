import { Component, OnInit } from '@angular/core'
import { ProductCartService } from '../../services/cart/product-cart.service'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [],
})
export class NavbarComponent implements OnInit {
    constructor(private cartService: ProductCartService) {}

    ngOnInit(): void {}

    getNumItems(): number {
        return this.cartService.getNumberOfItemsInCart()
    }
}
