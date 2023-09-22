import { Component } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  
  work_experience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let work1 = {
          Fecha : "2021-2022",
          Ubicacion : "Orizaba, Ver",
          Puesto : "Empleado multiusos",
          Empresa : "Ppeleria jesus",
          Logros : [
            {Descripccion : "Usar punto de venta"},
            {Descripccion : "Atencion al cliente"},
          ]
    };
    let work2 = {
      Fecha : "2022-2023",
      Ubicacion : "Orizaba, Ver",
      Puesto : "Empleado multiusos",
      Empresa : "Cafeteria Zepahua",
      Logros : [
        {Descripccion : "Usar otro sistema de ventas"},
        {Descripccion : "Experiencia basica de barista"},
        {Descripccion : "Experiencia en acesor de ventas y relaciones publicas"},
      ]
    };

    this.work_experience.push(work1);
    this.work_experience.push(work2);

  }


}