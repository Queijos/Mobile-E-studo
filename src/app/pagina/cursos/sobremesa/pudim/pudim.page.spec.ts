import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PudimPage } from './pudim.page';

describe('PudimPage', () => {
  let component: PudimPage;
  let fixture: ComponentFixture<PudimPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PudimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
