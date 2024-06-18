import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SashimiPage } from './sashimi.page';

describe('SashimiPage', () => {
  let component: SashimiPage;
  let fixture: ComponentFixture<SashimiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SashimiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
