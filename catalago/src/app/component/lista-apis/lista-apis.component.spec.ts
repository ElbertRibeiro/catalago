import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaApisComponent } from './lista-apis.component';

describe('ListaApisComponent', () => {
  let component: ListaApisComponent;
  let fixture: ComponentFixture<ListaApisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaApisComponent]
    });
    fixture = TestBed.createComponent(ListaApisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
