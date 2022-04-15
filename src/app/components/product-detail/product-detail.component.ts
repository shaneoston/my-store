import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import Product from '../../interfaces/Product.interface'
import { ProductService } from '../../services/product/product-service'

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
        private productService: ProductService
    ) {}

    ngOnInit(): void {
        this.Activatedroute.paramMap.subscribe((params) => {
            this.id = parseInt(params.get('id') as string)
        })
        console.log(this.id)
        this.productService.getProductById(this.id).subscribe((data) => {
            this.product = data as unknown as Product
            console.log(this.product)
        })
    }
}
