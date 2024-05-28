import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SorvetePage } from './sorvete.page';

describe('SorvetePage', () => {
  let component: SorvetePage;
  let fixture: ComponentFixture<SorvetePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SorvetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
