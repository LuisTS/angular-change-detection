import { Component } from '@angular/core';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  todos: TodoInterface[] = [
    {
      id: '1',
      text: 'First todo',
      isCompleted: true,
    },
    {
      id: '2',
      text: 'Second todo',
      isCompleted: true,
    },

    {
      id: '3',
      text: 'Third todo',
      isCompleted: false,
    },
  ];

  changeText() {
    console.log('changeText');
  }

  changeArray() {
    // this.todos[0].text = 'Foo';
    this.todos[0] = {...this.todos[0], text: 'Foo'};
    console.log("🚀 ~ file: todos.component.ts:37 ~ TodosComponent ~ changeArray ~ this.todos", this.todos)
  }

}
