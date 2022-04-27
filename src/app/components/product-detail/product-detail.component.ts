import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import Product from '../../interfaces/Product.interface'
import { ProductService } from '../../services/product/product-service'
import { ProductCartService } from '../../services/cart/product-cart.service'

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: [],
})
export class ProductDetailComponent implements OnInit {
    quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    quantitySelected: number = 1
    private id: number | undefined
    public product: Product | undefined

    constructor(
        private Activatedroute: ActivatedRoute,
        private productService: ProductService,
        private cartService: ProductCartService
    ) {}

    ngOnInit(): void {
        this.Activatedroute.paramMap.subscribe((params) => {
            this.id = parseInt(params.get('id') as string)
        })

        this.product = this.productService.getProductById(this.id as number)
    }

    addToCart() {
        // @ts-ignore
        this.cartService.addToCart(this.product, this.quantitySelected)
    }
}
