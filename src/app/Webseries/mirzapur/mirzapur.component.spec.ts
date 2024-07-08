import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MirzapurComponent } from './mirzapur.component';

describe('MirzapurComponent', () => {
  let component: MirzapurComponent;
  let fixture: ComponentFixture<MirzapurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MirzapurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MirzapurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
