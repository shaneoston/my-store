import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ProductCartService } from '../../services/cart/product-cart.service'
import { Router } from '@angular/router'

@Component({
    selector: 'app-customer-form',
    templateUrl: './customer-form.component.html',
    styleUrls: [],
})
export class CustomerFormComponent implements OnInit {
    // @ts-ignore
    public customerForm: FormGroup

    constructor(private formBuilder: FormBuilder, private cartService: ProductCartService, private router: Router) {}

    ngOnInit(): void {
        this.customerForm = this.formBuilder.group({
            fullName: ['', [Validators.required, Validators.minLength(3)]],
            address: ['', [Validators.required, Validators.minLength(6)]],
            creditCard: [null, [Validators.required]],
        })
    }

    submitSale(): void {
        const cart = this.cartService.getCart()

        if (this.customerForm.valid) {
            cart.customer = this.customerForm
            this.router.navigate(['/confirmation'])
        } else {
            alert('Form is invalid')
        }
    }
}
