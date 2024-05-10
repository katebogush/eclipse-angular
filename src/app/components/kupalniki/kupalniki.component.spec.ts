import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupalnikiComponent } from './kupalniki.component';

describe('KupalnikiComponent', () => {
  let component: KupalnikiComponent;
  let fixture: ComponentFixture<KupalnikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KupalnikiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KupalnikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
