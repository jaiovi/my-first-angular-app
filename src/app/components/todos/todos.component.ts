import { Component, OnInit } from '@angular/core';
//import { Todo } from 'src/app/models/Todo';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  title = "esto es un ejemplo";
  todos:Todo[];
  constructor() {} //obligatorio constructor
  ngOnInit() : void { //hay que definir onInit
    this.todos = [
      {
        content:'First todo',
        completed:false
      },
      {
        content:'second todo',
        completed:true
      }
    ]

  }
  
}
