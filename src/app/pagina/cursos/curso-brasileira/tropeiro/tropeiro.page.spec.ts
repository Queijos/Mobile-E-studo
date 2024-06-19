import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TropeiroPage } from './tropeiro.page';

describe('TropeiroPage', () => {
  let component: TropeiroPage;
  let fixture: ComponentFixture<TropeiroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TropeiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
