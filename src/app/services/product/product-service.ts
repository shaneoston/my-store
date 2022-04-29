import { Injectable } from '@angular/core'
import Product from '../../interfaces/Product.interface'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    public products: Product[] | undefined

    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('http://localhost:4200/assets/data.json')
    }

    // getProductById(id: number | undefined): Observable<Product[]> {
    //     return this.http.get<Product[]>(`http://localhost:4200/assets//${id}`)
    // }
}
