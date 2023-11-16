import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCandleComponent } from './edit-candle.component';

describe('EditCandleComponent', () => {
  let component: EditCandleComponent;
  let fixture: ComponentFixture<EditCandleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCandleComponent]
    });
    fixture = TestBed.createComponent(EditCandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
