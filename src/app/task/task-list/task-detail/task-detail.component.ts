import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  @Input() tasks: Task[];
  @Output() completedTaskChild = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  clickHandler() {
    this.completedTaskChild.emit();
  }
}
