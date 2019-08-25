import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  birthdays = [
    {
      name: "John Sina",
      birth: "11/30/2011"
    }, {
      name: "Barcy Washington",
      birth: "09/16/1992"
    }, {
      name: "Peter Parker",
      birth: "01/16/1992"
    }, {
      name: "Jimmy Shergil",
      birth: "12/12/2001"
    }, {
      name: "Alexander Alfred",
      birth: "02/09/1891"
    }, {
      name: "Krishna Gupta",
      birth: "12/01/1982"
    }, {
      name: "Sania Mirza",
      birth: "11/30/2011"
    }, {
      name: "Lata Pathak",
      birth: "10/31/1999"
    }
  ];
  // this takes input from the radio component
  @Input() sortBy: string;
  constructor() {}

  ngOnChanges() {
    console.log("call table sort method from table components " +this.sortBy);
    this.arrangeItems();
  }

  arrangeItems() {
    if(this.sortBy == 'age'){
      this.birthdays.sort(function(a, b){
        if(new Date(a.birth) < new Date(b.birth)){return -1;}
        if(new Date(a.birth) > new Date(b.birth)){return 1;}
        return 0;
      }); 
    }else if(this.sortBy=='name'){
     this.birthdays.sort(function(a, b){
       if(a.name < b.name){return -1;}
       if(a.name > b.name){return 1;}
       return 0;
     }); 
    }
    }

    compareDates(a, b) {
      if(this.getDate(a) < this.getDate(b)){return -1;}
      if(this.getDate(a) > this.getDate(b)){return 1;}
      return 0;
    }

    compareNames(a, b) {
      if(a < b){return -1;}
       if(a > b){return 1;}
       return 0;
    }

    getDate(str: string) {
      return new Date(str);
    }
}
