import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionJugadorPage } from './informacion-jugador.page';

describe('InformacionJugadorPage', () => {
  let component: InformacionJugadorPage;
  let fixture: ComponentFixture<InformacionJugadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionJugadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
