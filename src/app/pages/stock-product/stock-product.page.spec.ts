import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProductPage } from './stock-product.page';

describe('StockProductPage', () => {
  let component: StockProductPage;
  let fixture: ComponentFixture<StockProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockProductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
