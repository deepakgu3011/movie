import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadgaonComponent } from './madgaon.component';

describe('MadgaonComponent', () => {
  let component: MadgaonComponent;
  let fixture: ComponentFixture<MadgaonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadgaonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MadgaonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
