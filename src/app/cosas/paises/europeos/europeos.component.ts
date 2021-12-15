import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-europeos',
  templateUrl: './europeos.component.html'
})
export class EuropeosComponent implements OnInit {

  europeos: string[] = [
    'España',
    'Italia',
    'Francia',
    'Portugal',
    'Alemania',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
