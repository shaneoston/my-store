import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { ProductCartComponent } from './components/product-cart/product-cart.component'
import { CustomerFormComponent } from './components/customer-form/customer-form.component'

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductCardComponent,
        ProductDetailComponent,
        NavbarComponent,
        ProductCartComponent,
        CustomerFormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
