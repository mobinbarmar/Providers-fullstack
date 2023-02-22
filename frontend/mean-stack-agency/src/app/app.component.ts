import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Mean Stack Agency';
  nums = [10,20]
  sum = () => {
    return this.nums[0] + this.nums[1]
  }
  red = 'color: red'
  green = 'color: green'
  message = ''
  clickMe(val:string){
    console.log(val);
    this.message = val
  }
}
