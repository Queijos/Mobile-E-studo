import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemakiPage } from './temaki.page';

describe('TemakiPage', () => {
  let component: TemakiPage;
  let fixture: ComponentFixture<TemakiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemakiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
