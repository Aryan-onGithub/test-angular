import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaapComponent } from './baap.component';

describe('BaapComponent', () => {
  let component: BaapComponent;
  let fixture: ComponentFixture<BaapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
