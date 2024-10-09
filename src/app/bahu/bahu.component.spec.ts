import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BahuComponent } from './bahu.component';

describe('BahuComponent', () => {
  let component: BahuComponent;
  let fixture: ComponentFixture<BahuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BahuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BahuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
