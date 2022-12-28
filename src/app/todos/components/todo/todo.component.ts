import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { TodoInterface } from '../../types/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {

  @Input('todo') todoProps!: TodoInterface;

  filter$: Observable<string>;

  constructor(private todoSrv: TodosService) {
    this.filter$ = todoSrv.filter$;
  }

  checkRender(): boolean {
    console.log('checkRender');
    return true;
  }

  changeText() {
    this.todoProps.text = 'Change from inside';
    console.log("🚀 ~ file: todo.component.ts:29 ~ TodoComponent ~ changeText ~ this.todoProps.text", this.todoProps.text)
  }

  changeFilter() {
    this.todoSrv.filter$.next('active');
  }

}
