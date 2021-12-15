import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-americanos',
  templateUrl: './americanos.component.html'
})
export class AmericanosComponent implements OnInit {

  americanos: string[] = [
    'Estados Unidos',
    'Canada',
    'Mexico',
    'Colombia',
    'Brasil',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
