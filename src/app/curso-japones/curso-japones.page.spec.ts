import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoJaponesPage } from './curso-japones.page';

describe('CursoJaponesPage', () => {
  let component: CursoJaponesPage;
  let fixture: ComponentFixture<CursoJaponesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoJaponesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
