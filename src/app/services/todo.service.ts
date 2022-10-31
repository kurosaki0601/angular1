import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Todo {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private http: HttpClient) {}
  private baseURL = 'https://jsonplaceholder.typicode.com';

  getAllTodos() {
    return this.http.get(this.baseURL + '/todos');
  }

  deleteTodo(id) {
    return this.http.delete(this.baseURL + '/todos/' + id);
  }
  addNewTodo(todo) {
    return this.http.post(this.baseURL + '/todos', todo);
  }
  getTodos(id) {
    return this.http.get(this.baseURL + '/todos/' + id);
  }
}
