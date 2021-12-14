import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flores',
  templateUrl: './flores.component.html',
  styles: [
  ]
})
export class FloresComponent implements OnInit {

  flores: string[] = [
    'Orquídea',
    'Margarita',
    'Azucena',
    'Azalea',
    'Dalia',
    'Hortensia',
    'Lirio amarillo',
    'Hibisco',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
