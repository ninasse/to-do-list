import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskComponent } from './task.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

describe('TaskComponent', () => {
  let taskComponent: TaskComponent;
  let toDoComponent: ToDoListComponent;
  let toDoFixture: ComponentFixture<ToDoListComponent>;
  let taskFixture: ComponentFixture<TaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TaskComponent, ToDoListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    toDoFixture = TestBed.createComponent(ToDoListComponent);
    taskFixture = TestBed.createComponent(TaskComponent);
    toDoComponent = toDoFixture.componentInstance;
    taskComponent = taskFixture.componentInstance;
    toDoFixture.detectChanges();
  });

  it('should create', () => {
    taskComponent.task = { todo: 'unittesting', time: '10:00', done: false };
    taskFixture.detectChanges();
    const compiled = taskFixture.debugElement.nativeElement;
    expect(taskComponent).toBeTruthy();
  });

  it('should toggle the delete dialogue', () => {
    taskComponent.task = { todo: 'unittesting', time: '10:00', done: false };
    expect(taskComponent.displayed).toBeFalse();

    taskComponent.toggleDeleteDialogue();

    expect(taskComponent.displayed).toBeTrue();
  });

  it('should mark task as done', () => {
    taskComponent.task = { todo: 'unittesting', time: '10:00', done: false };
    expect(taskComponent.task.done).toBeFalse();

    taskComponent.addToDone(taskComponent.task);

    expect(taskComponent.task.done).toBeTrue();
  });
});
