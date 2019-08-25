import { Component, OnChanges  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  
  sortBy

  displaySort(sortBy){
    this.sortBy = sortBy;
    console.log("test "+sortBy);
  }

  ngOnChanges(){
    console.log("call table sort method from app components" +this.sortBy)
  }


}
