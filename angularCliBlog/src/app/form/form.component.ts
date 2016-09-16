import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css']
})
export class FormComponent implements OnInit {
  lists;
  text;

  constructor() {
  }

  ngOnInit() {
    this.lists = [
      {'text': 'hello-1'},
      {'text': 'hello-2'},
      {'text': 'hello-3'}
    ];
  }

  addItem() {
    this.lists.push({'text': this.text});
  }

}
