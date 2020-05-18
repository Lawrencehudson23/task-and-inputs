import { Component, OnInit } from '@angular/core';
import { Task } from './model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [
    {
      title: 'First Task',
      complete: false,
    },
    {
      title: 'Second Task',
      complete: true,
    },
    {
      title: 'Third Task',
      complete: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  completedTaskParent(task: Task) {
    this.task.complete = !this.task.complete;
  }
}
