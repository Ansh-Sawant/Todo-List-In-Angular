import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoMainComponent } from './add-todo-main.component';

describe('AddTodoMainComponent', () => {
  let component: AddTodoMainComponent;
  let fixture: ComponentFixture<AddTodoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTodoMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
