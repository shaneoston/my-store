import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SaleConfirmatonComponent } from './sale-confirmation.component'

describe('SaleConfirmatonComponent', () => {
    let component: SaleConfirmatonComponent
    let fixture: ComponentFixture<SaleConfirmatonComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SaleConfirmatonComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(SaleConfirmatonComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
