import { Component, OnInit } from '@angular/core';
import 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = [
    { title: "Argh" },
    { title: "Matey" },
    { title: "Where's the rum?" }

  ]

  constructor() { }

  next(){


  }


  
  ngOnInit() {
  }

}
