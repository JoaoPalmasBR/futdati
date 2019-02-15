import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAtletaComponent } from './cadastrar-atleta.component';

describe('CadastrarAtletaComponent', () => {
  let component: CadastrarAtletaComponent;
  let fixture: ComponentFixture<CadastrarAtletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarAtletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
