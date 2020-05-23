import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  constructor() {}
  @Input() task: Task;
  @Output() deleted = new EventEmitter<Task>();
  @Output() updated = new EventEmitter<Task>();
  @Output() done = new EventEmitter<Task>();

  taskStatus: string;

  displayed: boolean = false;
  displayedUpdate: boolean = false;
  addToDone(task: Task) {
    task.done = true;
    this.done.emit(this.task);
  }

  toggleDeleteDialogue() {
    this.displayed = !this.displayed;
  }
  hideDeleteDialogue() {
    this.displayed = false;
  }
  deleteTask() {
    this.deleted.emit(this.task);
  }
  toggleUpdateDialogue() {
    this.displayedUpdate = !this.displayedUpdate;
  }
  hideUpdateDialogue() {
    this.displayedUpdate = false;
  }
  updateTask(newTime: string) {
    this.task.time = newTime;
    this.updated.emit(this.task);
    this.hideUpdateDialogue();
  }
  ngOnInit(): void {}
}
