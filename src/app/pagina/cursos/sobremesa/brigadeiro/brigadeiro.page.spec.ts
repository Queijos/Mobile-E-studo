import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrigadeiroPage } from './brigadeiro.page';

describe('BrigadeiroPage', () => {
  let component: BrigadeiroPage;
  let fixture: ComponentFixture<BrigadeiroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrigadeiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
