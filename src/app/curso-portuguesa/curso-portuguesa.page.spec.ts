import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursoPortuguesaPage } from './curso-portuguesa.page';

describe('CursoPortuguesaPage', () => {
  let component: CursoPortuguesaPage;
  let fixture: ComponentFixture<CursoPortuguesaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoPortuguesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
