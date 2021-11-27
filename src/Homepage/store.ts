import { observable, action, computed, reaction, makeObservable } from "mobx";
import { createContext } from 'react';
import { v4 } from "uuid";

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

class TodoStore {
  constructor() {
    reaction(() => this.todos, _ => console.log(this.todos));
  }

  @observable
  is_loading: boolean = false;

  @observable
  todos: Todo[] = [
    { id: v4(), title: "Item #1", completed: false },
    { id: v4(), title: "Item #2", completed: false },
    { id: v4(), title: "Item #3", completed: false },
    { id: v4(), title: "Item #4", completed: false },
    { id: v4(), title: "Item #5", completed: true },
    { id: v4(), title: "Item #6", completed: false },
  ];

  @action
  addTodo = (todo: Todo) => {
    this.is_loading = true;
    this.todos.push({ ...todo, id: v4() });
    this.is_loading = false;
  };

  @action toggleTodo = (id: string) => {
    this.is_loading = true;
    console.log(this.todos);
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    })
    this.is_loading = false;
  }

  @action removeTodo = (id: string) => {
    this.is_loading = true;
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.is_loading = false;
  }

  @computed get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter(todo => todo.completed).length,
      notCompleted: this.todos.filter(todo => !todo.completed).length,
    }
  }
}

export default createContext(new TodoStore())