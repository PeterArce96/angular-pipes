import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-angular',
  templateUrl: './pipes-angular.component.html',
  styleUrls: ['./pipes-angular.component.css']
})
export class PipesAngularComponent implements OnInit {
  texto: string = 'ciudad de Madrid';

  constructor() { }

  ngOnInit(): void {
  }

}
