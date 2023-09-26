import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interes : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let int1 = {
      Nom_int : "Aprender a usar nuevas herramientas para el desarrollo de software"
    }

    let int2 = {
      Nom_int : "Aprender nuevos idiomas"
    }

this.interes.push(int1);
this.interes.push(int2);
  }
}