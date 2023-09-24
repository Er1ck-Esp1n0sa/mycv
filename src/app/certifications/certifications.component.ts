import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  certificado : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let cert1 = {
      Nom_cert : "PANDAS",
      Des_cert : [
        {Descripccion : "El usuario aprendio a usar la libreria de pandass de python"}
      ],
      ImagenURL: "https://firebasestorage.googleapis.com/v0/b/mycv-8a8b5.appspot.com/o/Erick%20Juarez%20Espinosa%20-%20Pandas.png?alt=media&token=908c208b-8f84-4446-a23b-bd063aa0ac30"
};

    let cert2 = {
      Nom_cert : "PYTHON",
      Des_cert : [
        {Descripccion : "El usuario aprendio lo basico de python"}
      ],
      ImagenURL: "https://firebasestorage.googleapis.com/v0/b/mycv-8a8b5.appspot.com/o/Erick%20Juarez%20Espinosa%20-%20Python.png?alt=media&token=70ea3e17-1ce9-4f01-ac89-95b70dfc6b19"
    };

this.certificado.push(cert1);
this.certificado.push(cert2);
}

}
