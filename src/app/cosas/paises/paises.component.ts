import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  europeos(){
    this.router.navigate(['europeos'], {relativeTo: this.route});
  }

  americanos(){
    this.router.navigate(['americanos'], {relativeTo: this.route});
  }

}
