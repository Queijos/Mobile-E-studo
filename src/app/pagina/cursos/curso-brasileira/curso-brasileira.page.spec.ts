import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoBrasileiraPage } from './curso-brasileira.page';

describe('CursoBrasileiraPage', () => {
  let component: CursoBrasileiraPage;
  let fixture: ComponentFixture<CursoBrasileiraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoBrasileiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
