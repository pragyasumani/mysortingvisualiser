import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @Output() event = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendValue(e : Event){
    //let slider = document.getElementById("myRange");
    console.log((e.target as HTMLInputElement).value);
    this.event.emit((e.target as HTMLInputElement).value);
  }
  

}
