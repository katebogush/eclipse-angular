import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsetsComponent } from './corsets.component';

describe('CorsetsComponent', () => {
  let component: CorsetsComponent;
  let fixture: ComponentFixture<CorsetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
