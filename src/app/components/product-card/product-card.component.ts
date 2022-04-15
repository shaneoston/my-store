import { Component, OnInit, Input } from '@angular/core'
import Product from '../../interfaces/Product.interface'

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html',
    styleUrls: [],
})
export class ProductCardComponent implements OnInit {
    @Input() product: Product = {
        id: 0,
        name: '',
        description: '',
        category: '',
        price: 0,
        url: '',
    }

    quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    quantitySelected: number = 1

    constructor() {}

    ngOnInit(): void {}

    addProductToCart(product: Product): void {
        console.log(product, this.quantitySelected)
    }
}
