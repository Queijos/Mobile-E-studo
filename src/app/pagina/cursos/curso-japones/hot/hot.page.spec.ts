import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotPage } from './hot.page';

describe('HotPage', () => {
  let component: HotPage;
  let fixture: ComponentFixture<HotPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
