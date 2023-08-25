import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> =  JSON.parse(localStorage.getItem('tasks') || '[]')

  ngDoCheck(): void {
    this.taskList.sort((a, b) => Number(a.checked) - Number(b.checked))

    localStorage.setItem('tasks', JSON.stringify(this.taskList))
  }

  public deleteTask(index: number): void {
     this.taskList.splice(index, 1)
  }

  public deleteAll(): void {
    if(this.taskList.length === 1) {
      this.taskList = []
      return
    }
    const isConfirmed = window.confirm(`Tem certeza que deseja deletar ${this.taskList.length} tasks?`)
    if(isConfirmed) {
      this.taskList = []
    }
  }

  public addNewTask(taskName: string): void {
    this.taskList.push({ task: taskName, checked: false })
  }

  public inputValidation(text: string, index: number) {
    if(text.length) return
    const isConfirmed = window.confirm("Deseja deletar a task?")
    if(isConfirmed) this.deleteTask(index)
  }
}
