import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
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

    console.log(`${deletedTask.todo} has been removed!`);
  }
  ngOnInit(): void {
    this.orderByTime();
  }
}
