import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatdComponent } from './product-catd.component';

describe('ProductCatdComponent', () => {
  let component: ProductCatdComponent;
  let fixture: ComponentFixture<ProductCatdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCatdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductCatdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
