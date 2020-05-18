import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor() {}
  @Input() task: Task;
  @Output() deleted = new EventEmitter<Task>();

  taskStatus: string;

  displayed: boolean = false;
  addToDone(task: Task) {
    task.done = true;
  }

  showDeleteDialogue() {
    this.displayed = !this.displayed;
  }
  hideDeleteDialogue() {
    this.displayed = false;
  }
  deleteTask() {
    this.deleted.emit(this.task);
  }
  ngOnInit(): void {}
}
