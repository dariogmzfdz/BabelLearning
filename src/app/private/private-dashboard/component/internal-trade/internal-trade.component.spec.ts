import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTradeComponent } from './internal-trade.component';

describe('InternalTradeComponent', () => {
  let component: InternalTradeComponent;
  let fixture: ComponentFixture<InternalTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
