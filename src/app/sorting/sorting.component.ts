import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bubbleSort(arr : number[]){
    console.log("before sorting\n "+arr);
    let temp =0;
    for(let i=0; i<arr.length; i++){
      for(let j=0; j<arr.length-i-1; j++){
          if(arr[j]>arr[j+1]){
            temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
      }
    }
    console.log("after sorting\n " +arr);
    return arr;
  }


}
