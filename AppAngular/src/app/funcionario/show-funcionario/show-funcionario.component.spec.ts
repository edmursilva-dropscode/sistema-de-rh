import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFuncionarioComponent } from './show-funcionario.component';

describe('ShowFuncionarioComponent', () => {
  let component: ShowFuncionarioComponent;
  let fixture: ComponentFixture<ShowFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowFuncionarioComponent]
    });
    fixture = TestBed.createComponent(ShowFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
