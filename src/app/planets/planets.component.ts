// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-planets',
//   templateUrl: './planets.component.html',
//   styleUrls: ['./planets.component.css']
// })
// export class PlanetsComponent implements OnInit {


//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import {Planet} from "../planet"
import {PLANETS} from './mock-planets'

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
   planets=PLANETS;
  constructor() { }

  ngOnInit(): void {
  }

}
