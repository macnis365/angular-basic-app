import { Component, OnInit,  EventEmitter, Output,} from '@angular/core';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  @Output() valueChange = new EventEmitter();

  model;
  constructor() {
    this.model = {
      sortBy: "name"
    }
  }

  returnModelState() {
    //return the the model.sortBy vale
    return this.model.sortBy;
  }

  sortByHandler(event: any){
    this.model.sortBy=event.target.value;
    console.log(this.model.sortBy)
    this.valueChange.emit(this.model.sortBy);
  }
}
