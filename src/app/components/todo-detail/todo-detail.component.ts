import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;
  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.todoService.getTodos(id).subscribe(
      (res: Todo) => {
        this.todo = res;
      },
      (err) => {}
    );
  }
}
