import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GastosMainComponent } from './gastos-main.component';

describe('GastosMainComponent', () => {
  let component: GastosMainComponent;
  let fixture: ComponentFixture<GastosMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GastosMainComponent]
    });
    fixture = TestBed.createComponent(GastosMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
