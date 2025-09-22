import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMembros } from './lista-membros';

describe('ListaMembros', () => {
  let component: ListaMembros;
  let fixture: ComponentFixture<ListaMembros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMembros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMembros);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
