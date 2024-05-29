import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StrogonoffPage } from './strogonoff.page';

describe('StrogonoffPage', () => {
  let component: StrogonoffPage;
  let fixture: ComponentFixture<StrogonoffPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StrogonoffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
