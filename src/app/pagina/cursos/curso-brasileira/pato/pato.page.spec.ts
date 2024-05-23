import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatoPage } from './pato.page';

describe('PatoPage', () => {
  let component: PatoPage;
  let fixture: ComponentFixture<PatoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
