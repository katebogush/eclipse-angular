import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenuarsComponent } from './penuars.component';

describe('PenuarsComponent', () => {
  let component: PenuarsComponent;
  let fixture: ComponentFixture<PenuarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PenuarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PenuarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
