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
    { todo: 'breakfastmeeting', time: '09:00', done: false },
    { todo: 'angular session', time: '10:30', done: false },
    { todo: 'lunch with someone', time: '12:00', done: false },
  ];

  ngOnInit(): void {}
}
