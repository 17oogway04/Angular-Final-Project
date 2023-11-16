import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandleComponent } from './add-candle.component';

describe('AddCandleComponent', () => {
  let component: AddCandleComponent;
  let fixture: ComponentFixture<AddCandleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCandleComponent]
    });
    fixture = TestBed.createComponent(AddCandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
