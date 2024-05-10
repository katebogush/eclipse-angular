import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanchohuComponent } from './panchohu.component';

describe('PanchohuComponent', () => {
  let component: PanchohuComponent;
  let fixture: ComponentFixture<PanchohuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanchohuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanchohuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
