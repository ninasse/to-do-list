import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor() {}
  @Input() task: Task;

  ngOnInit(): void {}
}
