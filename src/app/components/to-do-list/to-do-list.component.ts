import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  // MOCK DATA FOR TESTS
  newTask: string = 'Read';
  newTaskTime: string = '20:00';

  constructor() {}
  todolist: Task[] = [
    { todo: 'run', time: '06:30', done: false },
    { todo: 'angular session', time: '10:30', done: false },
    { todo: 'breakfastmeeting', time: '09:00', done: false },
    { todo: 'lunch with someone', time: '12:00', done: false },
  ];

  orderedList: Task[];
  orderByTime() {
    this.orderedList = this.todolist.sort((a, b) =>
      a.time.localeCompare(b.time)
    );
    console.log(this.orderedList);
  }
  addNewTask(newTask: string, newTaskTime: string) {
    let newAddedTask: Task = new Task();
    newAddedTask.todo = newTask;
    newAddedTask.time = newTaskTime;
    newAddedTask.done = false;

    this.todolist.push(newAddedTask);
    this.orderByTime();
    localStorage.setItem('tasks', JSON.stringify(this.orderedList));
  }
  setToDone(finishedTask: Task) {
    let index = this.todolist.findIndex((i) => i.todo === finishedTask.todo);
    this.todolist[index].done = true;
    this.orderByTime();
    localStorage.setItem('tasks', JSON.stringify(this.orderedList));
  }
  removeDeletedTask(deletedTask: Task) {
    deletedTask
      ? this.todolist.splice(
          this.todolist.findIndex(function (i) {
            return i.todo === deletedTask.todo;
          }),
          1
        )
      : console.log('nothing to delete');
    this.orderByTime();
    localStorage.setItem('tasks', JSON.stringify(this.orderedList));
    console.log(`${deletedTask.todo} has been removed!`);
  }
  setNewTime(updatedTask: Task) {
    let index = this.todolist.findIndex((i) => i.todo === updatedTask.todo);
    this.todolist[index].time = updatedTask.time;
    console.log('Update to' + updatedTask.time);
    this.orderByTime();
    localStorage.setItem('tasks', JSON.stringify(this.orderedList));
  }
  ngOnInit(): void {
    localStorage.setItem('tasks', JSON.stringify(this.todolist));
    this.orderedList = JSON.parse(localStorage.getItem('tasks'));
    ViewChild(TaskComponent);
  }
}
