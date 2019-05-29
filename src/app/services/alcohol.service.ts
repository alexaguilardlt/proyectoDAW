import { Injectable } from '@angular/core';
import { IAlcohol } from '../interfaces/i-alcohol';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AlcoholService {

  private alcoholUrl = 'https://prueba-62ec3.firebaseio.com/bebida.json';

  constructor(private http: HttpClient) { }

  /* getAlcoholes(): Observable<IAlcohol[]> {
    return this.http.get<{ alcoholes: IAlcohol[] }>(this.alcoholUrl).pipe(map(response => response.alcoholes));
  } */

  getAlcoholes(): IAlcohol[] {
    return [{
      tipo: "Ginebra",
      id: "g1",
      nombre: "Larios",
      precioBotella: 150,
      precioCopa: 10
    }, {
      tipo: "Ginebra",
      id: "g2",
      nombre: "Seagrams",
      precioBotella: 180,
      precioCopa: 10
    }, {
      tipo: "Ron",
      id: "r1",
      nombre: "Brugal",
      precioBotella: 180,
      precioCopa: 10
    }, {
      tipo: "Ron",
      id: "r2",
      nombre: "Barcelo",
      precioBotella: 180,
      precioCopa: 10
    }, {
      tipo: "Vodzka",
      id: "v1",
      nombre: "Icelandic",
      precioBotella: 180,
      precioCopa: 10
    }, {
      tipo: "Vodzka",
      id: "v2",
      nombre: "Absolut",
      precioBotella: 180,
      precioCopa: 10
    }, {
      tipo: "Whiskie",
      id: "w1",
      nombre: "Ballantines",
      precioBotella: 180,
      precioCopa: 10
    }, {
      tipo: "Whiskie",
      id: "w2",
      nombre: "JB",
      precioBotella: 180,
      precioCopa: 10
    }];
  }
}
