import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
    selector: 'app-customer-form',
    templateUrl: './customer-form.component.html',
    styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
    // @ts-ignore
    public customerForm: FormGroup

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {
        this.customerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.min(3), Validators.pattern('^[a-zA-Z]+$')]],
            lastName: ['', [Validators.required, Validators.min(3), Validators.pattern('^[a-zA-Z]+$')]],
            address: ['', [Validators.required, Validators.min(6)]],
            creditCard: [null, [Validators.required]],
        })
    }

    submitSale(): void {
        if (this.customerForm.valid) {
            alert('Form is valid')
        } else {
            alert('Form is invalid')
        }
    }
}
