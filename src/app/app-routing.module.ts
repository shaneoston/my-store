import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductCartComponent } from './components/product-cart/product-cart.component'
import { SaleConfirmationComponent } from './components/sale-confirmation/sale-confirmation.component'

const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'cart', component: ProductCartComponent },
    { path: 'confirmation', component: SaleConfirmationComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
