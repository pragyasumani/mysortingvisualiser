import { Component } from '@angular/core';
import {SortingComponent} from './sorting/sorting.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'sorting-visualizer';
  arr : number[] = [];
  height : number = 0;
  sorting : SortingComponent = new SortingComponent();
  
  randomInteger(min : number, max : number) : number {
    this.height = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(this.height);
    return this.height;
  }

  setValue(s : string){
    
      //let n = Number((e.target as HTMLInputElement).value);
      console.log(s);
      if(!s.endsWith("Sort")){
        this.arr = [];
        let n = Number(s);
        for(let i=0; i<n; i++){
        this.arr.push(this.randomInteger(10,100));
        console.log(this.arr);
        }
      } else {
        if(s==="bubbleSort"){
          this.arr = this.sorting.bubbleSort(this.arr);
        }
      }
      
  }
  
}
