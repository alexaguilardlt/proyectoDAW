import { Component, OnInit } from '@angular/core';
import { IAlcohol } from '../interfaces/i-alcohol';
import { AlcoholService } from '../services/alcohol.service';

@Component({
  selector: 'indice-alcohol',
  templateUrl: './indice-alcohol.component.html',
  styleUrls: ['./indice-alcohol.component.css']
})
export class IndiceAlcoholComponent implements OnInit {

  alcoholes: IAlcohol[] = [];

  constructor(private alcoholService: AlcoholService) { }

  ngOnInit() {
    this.alcoholes = this.alcoholService.getAlcoholes();
    /* this.alcoholService.getAlcoholes().subscribe(alc => this.alcoholes = alc,
      error => console.log(error),
      () => console.log("Alcohol cargado")); */
  }

}
