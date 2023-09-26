import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill_c : Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    let hb1 = {
      Nom_skill : "Habilidad para aprender rapido",
      Des_skill : [
        {Descripccion : "✨✨✨✨✨"}
      ]
};
let hb2 = {
  Nom_skill : "Habilidad para comunicarse con las personas",
  Des_skill : [
    {Descripccion : "✨✨✨✨"}
  ]
};
let hb3 = {
  Nom_skill : "Habilidad de programador",
  Des_skill : [
    {Descripccion : "✨✨✨"}
  ]
};
let hb4 = {
  Nom_skill : "Habilidad de administrador",
  Des_skill : [
    {Descripccion : "✨✨✨"}
  ]
};

let hb5 = {
  Nom_skill : "Habilidad con HTML",
  Des_skill : [
    {Descripccion : "✨✨✨"}
  ]
};

let hb6 = {
  Nom_skill : "Habilidad con SQL",
  Des_skill : [
    {Descripccion : "✨✨✨"}
  ]
};

let hb7 = {
  Nom_skill : "Habilidad con C++",
  Des_skill : [
    {Descripccion : "✨✨✨"}
  ]
};

this.skill_c.push(hb1);
this.skill_c.push(hb2);
this.skill_c.push(hb3);
this.skill_c.push(hb4);
this.skill_c.push(hb5);
this.skill_c.push(hb6);
this.skill_c.push(hb7);
  }

}