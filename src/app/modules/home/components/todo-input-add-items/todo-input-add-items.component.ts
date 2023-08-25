import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-items',
  templateUrl: './todo-input-add-items.component.html',
  styleUrls: ['./todo-input-add-items.component.scss']
})
export class TodoInputAddItemsComponent {
  @Output() public emitTask = new EventEmitter()

  public newTaskName = ''

  public submitTask(): void {
    if(!this.newTaskName.trim()) return
    this.emitTask.emit(this.newTaskName)
    this.newTaskName = ''
  }
}
