import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAtletasComponent } from './listar-atletas.component';

describe('ListarAtletasComponent', () => {
  let component: ListarAtletasComponent;
  let fixture: ComponentFixture<ListarAtletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAtletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAtletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
