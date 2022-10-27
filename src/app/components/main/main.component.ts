import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from 'src/app/vervices/todo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  name: string = 'PHH';
  googleURL: string = 'https://www.google.com/?hl=vi';
  newTodo: string = '';

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    todoService.getAllTodos().subscribe((res: Todo[]) => {
      this.todos = res;
    });
  }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((res: Todo[]) => {
      this.todos = res;
    });
  }

  btnIncrease(eventObj) {
    this.counter += 1;
  }

  btnMinus() {
    this.counter <= 0 ? 0 : (this.counter -= 1);
  }

  onblur(value) {
    this.name = value;
  }

  addTodoList(input?) {
    var newTodo = {
      userId: 1,
      title: this.newTodo,
      completed: false,
    };
    this.newTodo = '';
    this.todoService.addNewTodo(newTodo).subscribe(
      (res: Todo) => {
        this.todos.unshift(res);
      },
      (err) => {}
    );
  }

  deletedTodoList(index) {
    this.todoService.deleteTodo(this.todos[index].id).subscribe(
      (res) => {
        this.todos.splice(index, 1);
      },
      (err) => {}
    );
  }

  checkTatus(status, index) {
    this.todos[index].completed = !status;
  }

  counter: number = 0;
}
