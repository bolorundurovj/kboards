import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  todo = ['Get Up', 'Have my Bath', 'Get Dressed'];
  inProgress = ['Devotion', 'Meditation'];
  completed = ['Wake Up', 'Reset Alarm'];

  board = new Board (
    'Test Board 1', [
      new Column('Todo', ['Get Up', 'Have my Bath', 'Get Dressed']),
      new Column('In Progress', ['Devotion', 'Meditation']),
      new Column('Completed', ['Wake Up', 'Reset Alarm']),
    ]
  )

  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
