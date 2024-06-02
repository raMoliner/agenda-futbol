import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformacionEquipoPage } from './informacion-equipo.page';

describe('InformacionEquipoPage', () => {
  let component: InformacionEquipoPage;
  let fixture: ComponentFixture<InformacionEquipoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
