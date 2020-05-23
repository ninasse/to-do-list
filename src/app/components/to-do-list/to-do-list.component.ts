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
  newTask: string;
  newTaskTime: string;

  constructor() {}
  todolist: Task[] = [
    { todo: 'run', time: '06:30', done: false },
    { todo: 'angular session', time: '10:30', done: false },
    { todo: 'breakfastmeeting', time: '09:00', done: false },
    { todo: 'lunch with someone', time: '12:00', done: false },
  ];

  orderedList: Task[];
  orderByTime() {
    this.orderedList.sort((a, b) => a.time.localeCompare(b.time));
    console.log(this.orderedList);
    return localStorage.setItem('tasks', JSON.stringify(this.orderedList));
  }
  addNewTask(newTask: string, newTaskTime: string) {
    let newAddedTask: Task = new Task();
    newAddedTask.todo = newTask;
    newAddedTask.time = newTaskTime;
    newAddedTask.done = false;

    this.orderedList.push(newAddedTask);
    this.orderByTime();
  }
  setToDone(finishedTask: Task) {
    let index = this.orderedList.findIndex((i) => i.todo === finishedTask.todo);
    this.orderedList[index].done = true;
    this.orderByTime();
  }
  removeDeletedTask(deletedTask: Task) {
    deletedTask
      ? this.orderedList.splice(
          this.orderedList.findIndex(function (i) {
            return i.todo === deletedTask.todo;
          }),
          1
        )
      : console.log('nothing to delete');
    console.log(`${deletedTask.todo} has been removed!`);
    this.orderByTime();
  }
  setNewTime(updatedTask: Task) {
    let index = this.orderedList.findIndex((i) => i.todo === updatedTask.todo);
    this.orderedList[index].time = updatedTask.time;
    console.log('Update time to ' + updatedTask.time);
    this.orderByTime();
  }

  ngOnInit(): void {
    if (localStorage.getItem('tasks') === null || undefined) {
      localStorage.setItem('tasks', JSON.stringify(this.todolist));
      this.orderedList = JSON.parse(localStorage.getItem('tasks'));
    } else {
      this.orderedList = JSON.parse(localStorage.getItem('tasks'));
      localStorage.setItem('tasks', JSON.stringify(this.orderedList));
    }
    ViewChild(TaskComponent);
  }
}
