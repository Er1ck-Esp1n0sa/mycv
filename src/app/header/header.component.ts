import { Component } from '@angular/core';
import { HeaderService } from '../services/header.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private headerService: HeaderService){}

  name : string = "Erick Juarez Espinosa";
  vision : string = "Ser el mejor progra y que mi version de mañanasupere a mi version del ayer";
  contacto1 : string = "erikc_48@hotmail.com";
  contacto2 : string = "272-162-8542";
  contacto3 : string="gitHub";
  direccion : string="El trebol, Orizaba, Ver";
  foto : string = "https://firebasestorage.googleapis.com/v0/b/mycv-8a8b5.appspot.com/o/ErickEspinosa.jpg?alt=media&token=b96f52b3-e6b6-4851-8c37-22b5c8929919";
  ancho: number = 100; // Cambia este valor al ancho deseado en píxeles
  alto: number = 100;

  ngOnInit(): void{
    this.headerService.getHeader()
    .subscribe( (data: any) => {
      console.log(data)
      //alert(data)
      this.name = data.name;
      this.vision = data.mision;
      this.foto = data.foto; 
      this.contacto1 = data.email; 
      this.contacto2 = data.celular;
      this.contacto3 = data.redsocial;
      this.direccion = data.ubicacion;
    });
  }     
}
