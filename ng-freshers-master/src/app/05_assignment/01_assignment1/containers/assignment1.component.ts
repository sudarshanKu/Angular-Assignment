import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component {
  title:any; 

  test(test){
    console.log(test.value,"tttttttttt")
    this.title=test.value;
  }
}
