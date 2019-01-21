import { Component, OnInit } from '@angular/core';

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

  ngOnInit() {
  }

}
