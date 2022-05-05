import { Component, OnInit } from '@angular/core'
import { ProductService } from '../../services/product/product-service'
import Product from '../../interfaces/Product.interface'
import { ProductCartService } from '../../services/cart/product-cart.service'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: [],
})
export class ProductListComponent implements OnInit {
    products: Array<Product> | undefined

    constructor(private productService: ProductService, private cartService: ProductCartService) {}

    ngOnInit(): void {
        this.productService.getProducts().subscribe((data) => {
            this.products = data
        })
    }

    addToCart(product: Product): void {
        // @ts-ignore
        this.cartService.addToCart(product)
    }
}
